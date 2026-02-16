# Промпт для бэкенд-разработчика: Обновление API для klever-landing

## Контекст

Проект: FastAPI бэкенд для лендинга klever-landing (kleversafe.ru)

Текущая ситуация:
- Nginx проксирует все запросы к `/klever/` на бэкенд API
- Фронтенд уже обновлен и отправляет запросы на правильные пути
- Нужно добавить/обновить эндпоинты для сбора данных клиентов

## Задача

Реализовать три API endpoint'а для работы с формами на лендинге:

1. **POST /klever/orders** - сохранение заявок на покупку кулона
2. **POST /klever/notifications** - подписка на уведомления о поступлении товаров (брелок, браслет)
3. **GET /klever/availability** - проверка наличия товара (опционально)

## Требования к эндпоинтам

### 1. POST /klever/orders

**Назначение:** Сохранение заявок на покупку кулона Клевер

**Запрос (JSON):**
```json
{
  "name": "Иван Иванов",
  "contact": "+79991234567",
  "timestamp": "2026-02-16T10:30:00.000Z"
}
```

**Валидация:**
- `name` - обязательное поле, строка, не пустая после trim()
- `contact` - обязательное поле, строка, не пустая после trim()
- `timestamp` - опциональное поле, ISO 8601 формат. Если не передано, использовать текущее время

**Успешный ответ (200 OK):**
```json
{
  "success": true,
  "message": "Заявка успешно сохранена",
  "id": 123
}
```

**Ошибка валидации (400 Bad Request):**
```json
{
  "success": false,
  "message": "Имя и контакт обязательны"
}
```

**Ошибка сервера (500 Internal Server Error):**
```json
{
  "success": false,
  "message": "Ошибка сервера при сохранении заказа"
}
```

**Логика:**
- Сохранить данные в таблицу `orders` в базе данных
- Поле `status` по умолчанию: `'pending'`
- Вернуть ID созданной записи

---

### 2. POST /klever/notifications

**Назначение:** Подписка на уведомления о поступлении товаров (брелок, браслет, кулон)

**Запрос (JSON):**
```json
{
  "name": "Мария Петрова",
  "contact": "@telegram_username",
  "product_type": "brelok",
  "timestamp": "2026-02-16T10:30:00.000Z"
}
```

**Валидация:**
- `name` - обязательное поле, строка, не пустая после trim()
- `contact` - обязательное поле, строка, не пустая после trim()
- `product_type` - обязательное поле, одно из значений: `"brelok"`, `"braslet"`, `"coupon"`
- `timestamp` - опциональное поле, ISO 8601 формат. Если не передано, использовать текущее время

**Успешный ответ (200 OK):**
```json
{
  "success": true,
  "message": "Подписка успешно оформлена",
  "id": 456
}
```

**Ошибка валидации (400 Bad Request):**
```json
{
  "success": false,
  "message": "Имя, контакт и тип продукта обязательны"
}
```

или

```json
{
  "success": false,
  "message": "Недопустимый тип продукта. Допустимые значения: brelok, braslet, coupon"
}
```

**Ошибка сервера (500 Internal Server Error):**
```json
{
  "success": false,
  "message": "Ошибка сервера при сохранении подписки"
}
```

**Логика:**
- Сохранить данные в таблицу `notifications` в базе данных
- Поле `notified` по умолчанию: `false` (для отслеживания отправки уведомления)
- Вернуть ID созданной записи

---

### 3. GET /klever/availability (опционально)

**Назначение:** Проверка наличия товара на складе

**Запрос:** Без параметров

**Успешный ответ (200 OK):**
```json
{
  "available": false
}
```

**Логика:**
- Проверить наличие товара в базе данных
- Вернуть `true` если товар есть в наличии, `false` если распродан
- При любой ошибке безопасно вернуть `false` (чтобы фронтенд показал форму сбора контактов)

---

## Структура базы данных

### Таблица `orders`

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  contact VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending'
);

CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_orders_status ON orders(status);
```

### Таблица `notifications`

```sql
CREATE TABLE notifications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  contact VARCHAR(255) NOT NULL,
  product_type VARCHAR(50) NOT NULL, -- 'brelok', 'braslet', 'coupon'
  timestamp TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notified BOOLEAN DEFAULT FALSE -- для отслеживания отправки уведомления
);

CREATE INDEX idx_notifications_product_type ON notifications(product_type);
CREATE INDEX idx_notifications_notified ON notifications(notified);
CREATE INDEX idx_notifications_created_at ON notifications(created_at);
```

---

## Пример реализации на FastAPI

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field, validator
from typing import Optional
from datetime import datetime
from enum import Enum

app = FastAPI()

class ProductType(str, Enum):
    BRELOK = "brelok"
    BRASLET = "braslet"
    COUPON = "coupon"

class OrderRequest(BaseModel):
    name: str = Field(..., min_length=1, description="Имя клиента")
    contact: str = Field(..., min_length=1, description="Контакт (телефон или Telegram)")
    timestamp: Optional[str] = None

    @validator('name', 'contact')
    def trim_fields(cls, v):
        return v.strip() if isinstance(v, str) else v

    @validator('name', 'contact')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('Поле не может быть пустым')
        return v.strip()

class NotificationRequest(BaseModel):
    name: str = Field(..., min_length=1, description="Имя клиента")
    contact: str = Field(..., min_length=1, description="Контакт (телефон или Telegram)")
    product_type: ProductType = Field(..., description="Тип продукта")
    timestamp: Optional[str] = None

    @validator('name', 'contact')
    def trim_fields(cls, v):
        return v.strip() if isinstance(v, str) else v

    @validator('name', 'contact')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('Поле не может быть пустым')
        return v.strip()

class SuccessResponse(BaseModel):
    success: bool = True
    message: str
    id: int

class ErrorResponse(BaseModel):
    success: bool = False
    message: str

@app.post("/klever/orders", response_model=SuccessResponse, status_code=200)
async def create_order(order: OrderRequest):
    """
    Создание заявки на покупку кулона
    """
    try:
        # Парсим timestamp или используем текущее время
        order_timestamp = datetime.fromisoformat(order.timestamp.replace('Z', '+00:00')) if order.timestamp else datetime.utcnow()
        
        # Сохранение в БД (пример с SQLAlchemy)
        # order_record = Order(
        #     name=order.name,
        #     contact=order.contact,
        #     timestamp=order_timestamp,
        #     status='pending'
        # )
        # db.session.add(order_record)
        # db.session.commit()
        
        # Здесь должна быть реальная логика сохранения в БД
        order_id = await save_order_to_db(order.name, order.contact, order_timestamp)
        
        return SuccessResponse(
            success=True,
            message="Заявка успешно сохранена",
            id=order_id
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail={
            "success": False,
            "message": str(e)
        })
    except Exception as e:
        print(f"Ошибка сохранения заказа: {e}")
        raise HTTPException(status_code=500, detail={
            "success": False,
            "message": "Ошибка сервера при сохранении заказа"
        })

@app.post("/klever/notifications", response_model=SuccessResponse, status_code=200)
async def create_notification(notification: NotificationRequest):
    """
    Подписка на уведомление о поступлении товара
    """
    try:
        # Парсим timestamp или используем текущее время
        notification_timestamp = datetime.fromisoformat(notification.timestamp.replace('Z', '+00:00')) if notification.timestamp else datetime.utcnow()
        
        # Сохранение в БД (пример с SQLAlchemy)
        # notification_record = Notification(
        #     name=notification.name,
        #     contact=notification.contact,
        #     product_type=notification.product_type.value,
        #     timestamp=notification_timestamp,
        #     notified=False
        # )
        # db.session.add(notification_record)
        # db.session.commit()
        
        # Здесь должна быть реальная логика сохранения в БД
        notification_id = await save_notification_to_db(
            notification.name,
            notification.contact,
            notification.product_type.value,
            notification_timestamp
        )
        
        return SuccessResponse(
            success=True,
            message="Подписка успешно оформлена",
            id=notification_id
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail={
            "success": False,
            "message": str(e)
        })
    except Exception as e:
        print(f"Ошибка сохранения подписки: {e}")
        raise HTTPException(status_code=500, detail={
            "success": False,
            "message": "Ошибка сервера при сохранении подписки"
        })

@app.get("/klever/availability")
async def check_availability():
    """
    Проверка наличия товара на складе
    """
    try:
        # Здесь должна быть логика проверки наличия в БД
        # available = await check_product_availability_in_db()
        available = False  # Заглушка
        
        return {"available": available}
    except Exception as e:
        # При ошибке безопасно возвращаем false
        print(f"Ошибка проверки наличия: {e}")
        return {"available": False}
```

---

## Важные требования

1. **Валидация данных:**
   - Все строковые поля должны быть обрезаны (trim)
   - Проверка на пустые значения после trim
   - Валидация `product_type` на допустимые значения

2. **Обработка ошибок:**
   - Все ошибки должны возвращать JSON с полем `success: false` и `message`
   - HTTP статус коды: 200 для успеха, 400 для валидации, 500 для сервера
   - Логирование ошибок на сервере

3. **Безопасность:**
   - Защита от SQL-инъекций (использовать параметризованные запросы)
   - Валидация всех входных данных
   - Рекомендуется добавить rate limiting для защиты от спама

4. **Формат ответов:**
   - Все ответы должны содержать поле `success` (boolean)
   - Успешные ответы: `success: true` + `message` + `id`
   - Ошибки: `success: false` + `message`

5. **База данных:**
   - Использовать транзакции для сохранения данных
   - Добавить индексы для оптимизации запросов
   - Логировать все операции для отладки

---

## Проверка после реализации

После реализации проверить:

1. ✅ POST запрос на `/klever/orders` сохраняет данные в таблицу `orders`
2. ✅ POST запрос на `/klever/notifications` сохраняет данные в таблицу `notifications`
3. ✅ GET запрос на `/klever/availability` возвращает JSON с полем `available`
4. ✅ Валидация работает корректно (пустые поля, недопустимый `product_type`)
5. ✅ Ошибки возвращаются в правильном формате с полем `success: false`
6. ✅ Успешные ответы содержат `success: true`, `message` и `id`

---

## Дополнительные рекомендации

- Добавить логирование всех запросов для аналитики
- Рассмотреть возможность добавления email-валидации для контактов
- Добавить возможность дублирования записей (если один человек подписался дважды)
- Рассмотреть добавление поля `source` для отслеживания источника заявки
