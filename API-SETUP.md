# Настройка API для сбора данных клиентов

## Что нужно сделать на бэкенде

Фронтенд отправляет данные формы на API endpoint. Вам нужно создать на вашем сервере API endpoint, который будет принимать эти данные и сохранять их в базу данных.

### 1. Endpoint для сохранения заказа

**URL:** `POST /klever/orders`

**Запрос:**
```json
{
  "name": "Иван Иванов",
  "contact": "+79991234567",
  "timestamp": "2026-02-16T10:30:00.000Z"
}
```

**Успешный ответ (200 OK):**
```json
{
  "success": true,
  "message": "Заявка успешно сохранена",
  "id": 123
}
```

**Ошибка (400/500):**
```json
{
  "success": false,
  "message": "Описание ошибки"
}
```

### 2. Endpoint для подписки на уведомления о поступлении товара

**URL:** `POST /klever/notifications`

**Запрос:**
```json
{
  "name": "Иван Иванов",
  "contact": "+79991234567",
  "product_type": "brelok",
  "timestamp": "2026-02-16T10:30:00.000Z"
}
```

**Типы продуктов (`product_type`):**
- `"brelok"` - Брелок
- `"braslet"` - Браслет
- `"coupon"` - Кулон (если понадобится в будущем)

**Успешный ответ (200 OK):**
```json
{
  "success": true,
  "message": "Подписка успешно оформлена",
  "id": 456
}
```

**Ошибка (400/500):**
```json
{
  "success": false,
  "message": "Описание ошибки"
}
```

### 3. Endpoint для проверки наличия (опционально)

**URL:** `GET /klever/availability`

**Успешный ответ (200 OK):**
```json
{
  "available": false
}
```

Если endpoint не существует или возвращает `available: false`, форма будет показана для сбора контактов.

### 4. Пример реализации на Node.js/Express

```javascript
// Пример endpoint для сохранения заказа
app.post('/klever/orders', async (req, res) => {
  try {
    const { name, contact, timestamp } = req.body;

    // Валидация
    if (!name || !contact) {
      return res.status(400).json({
        success: false,
        message: 'Имя и контакт обязательны'
      });
    }

    // Сохранение в базу данных
    const order = await db.orders.create({
      name: name.trim(),
      contact: contact.trim(),
      timestamp: timestamp || new Date(),
      createdAt: new Date()
    });

    res.json({
      success: true,
      message: 'Заявка успешно сохранена',
      id: order.id
    });
  } catch (error) {
    console.error('Ошибка сохранения заказа:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка сервера при сохранении заказа'
    });
  }
});

// Пример endpoint для подписки на уведомления
app.post('/klever/notifications', async (req, res) => {
  try {
    const { name, contact, product_type, timestamp } = req.body;

    // Валидация
    if (!name || !contact || !product_type) {
      return res.status(400).json({
        success: false,
        message: 'Имя, контакт и тип продукта обязательны'
      });
    }

    // Валидация типа продукта
    const validTypes = ['brelok', 'braslet', 'coupon'];
    if (!validTypes.includes(product_type)) {
      return res.status(400).json({
        success: false,
        message: 'Недопустимый тип продукта'
      });
    }

    // Сохранение в базу данных
    const notification = await db.notifications.create({
      name: name.trim(),
      contact: contact.trim(),
      product_type: product_type,
      timestamp: timestamp || new Date(),
      createdAt: new Date()
    });

    res.json({
      success: true,
      message: 'Подписка успешно оформлена',
      id: notification.id
    });
  } catch (error) {
    console.error('Ошибка сохранения подписки:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка сервера при сохранении подписки'
    });
  }
});

// Пример endpoint для проверки наличия
app.get('/klever/availability', async (req, res) => {
  try {
    // Проверка наличия товара в базе данных
    const count = await db.products.count({ where: { available: true } });
    
    res.json({
      available: count > 0
    });
  } catch (error) {
    res.json({
      available: false
    });
  }
});
```

### 5. Пример реализации на Python/Flask

```python
from flask import Flask, request, jsonify
from datetime import datetime

@app.route('/klever/orders', methods=['POST'])
def create_order():
    try:
        data = request.json
        name = data.get('name', '').strip()
        contact = data.get('contact', '').strip()
        timestamp = data.get('timestamp', datetime.utcnow().isoformat())

        if not name or not contact:
            return jsonify({
                'success': False,
                'message': 'Имя и контакт обязательны'
            }), 400

        # Сохранение в базу данных
        order_id = save_order_to_db(name, contact, timestamp)

        return jsonify({
            'success': True,
            'message': 'Заявка успешно сохранена',
            'id': order_id
        }), 200

    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Ошибка сервера при сохранении заказа'
        }), 500

@app.route('/klever/notifications', methods=['POST'])
def create_notification():
    try:
        data = request.json
        name = data.get('name', '').strip()
        contact = data.get('contact', '').strip()
        product_type = data.get('product_type', '').strip()
        timestamp = data.get('timestamp', datetime.utcnow().isoformat())

        if not name or not contact or not product_type:
            return jsonify({
                'success': False,
                'message': 'Имя, контакт и тип продукта обязательны'
            }), 400

        # Валидация типа продукта
        valid_types = ['brelok', 'braslet', 'coupon']
        if product_type not in valid_types:
            return jsonify({
                'success': False,
                'message': 'Недопустимый тип продукта'
            }), 400

        # Сохранение в базу данных
        notification_id = save_notification_to_db(name, contact, product_type, timestamp)

        return jsonify({
            'success': True,
            'message': 'Подписка успешно оформлена',
            'id': notification_id
        }), 200

    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Ошибка сервера при сохранении подписки'
        }), 500

@app.route('/klever/availability', methods=['GET'])
def check_availability():
    try:
        available = check_product_availability()
        return jsonify({'available': available}), 200
    except:
        return jsonify({'available': False}), 200
```

### 6. Настройка CORS (если API на другом домене)

Если ваш API находится на другом домене или порту, убедитесь, что настроен CORS:

**Node.js/Express:**
```javascript
const cors = require('cors');
app.use(cors({
  origin: 'https://your-domain.com',
  credentials: true
}));
```

**Python/Flask:**
```python
from flask_cors import CORS
CORS(app, origins=['https://your-domain.com'])
```

### 7. Переменные окружения (опционально)

Если ваш API находится на другом URL, вы можете задать его через переменную окружения:

Создайте файл `.env` в корне проекта:
```
VITE_API_URL=https://api.your-domain.com
```

Или если API на том же домене:
```
VITE_API_URL=/klever
```

По умолчанию используется `/klever` (относительный путь).

### 8. Структура таблиц в базе данных

Рекомендуемая структура таблицы `orders`:

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  contact VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending'
);
```

Рекомендуемая структура таблицы `notifications`:

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
```

### 9. Проверка работы

После настройки API:

1. Откройте лендинг в браузере
2. Нажмите кнопку "Купить" - проверить `/klever/orders`
3. Нажмите "Когда поступит?" для брелока или браслета - проверить `/klever/notifications`
4. Заполните формы и отправьте
5. Проверьте в базе данных, что данные сохранились
6. Проверьте консоль браузера на наличие ошибок

### 10. Безопасность

Рекомендуется добавить:
- Валидацию данных на сервере
- Защиту от спама (rate limiting)
- Защиту от SQL-инъекций (используйте параметризованные запросы)
- HTTPS для передачи данных
