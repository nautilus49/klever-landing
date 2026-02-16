# Настройка API для сбора данных клиентов

## Что нужно сделать на бэкенде

Фронтенд отправляет данные формы на API endpoint. Вам нужно создать на вашем сервере API endpoint, который будет принимать эти данные и сохранять их в базу данных.

### 1. Endpoint для сохранения заказа

**URL:** `POST /api/orders`

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

### 2. Endpoint для проверки наличия (опционально)

**URL:** `GET /api/availability`

**Успешный ответ (200 OK):**
```json
{
  "available": false
}
```

Если endpoint не существует или возвращает `available: false`, форма будет показана для сбора контактов.

### 3. Пример реализации на Node.js/Express

```javascript
// Пример endpoint для сохранения заказа
app.post('/api/orders', async (req, res) => {
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

// Пример endpoint для проверки наличия
app.get('/api/availability', async (req, res) => {
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

### 4. Пример реализации на Python/Flask

```python
from flask import Flask, request, jsonify
from datetime import datetime

@app.route('/api/orders', methods=['POST'])
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

@app.route('/api/availability', methods=['GET'])
def check_availability():
    try:
        available = check_product_availability()
        return jsonify({'available': available}), 200
    except:
        return jsonify({'available': False}), 200
```

### 5. Настройка CORS (если API на другом домене)

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

### 6. Переменные окружения (опционально)

Если ваш API находится на другом URL, вы можете задать его через переменную окружения:

Создайте файл `.env` в корне проекта:
```
VITE_API_URL=https://api.your-domain.com
```

Или если API на том же домене:
```
VITE_API_URL=/api
```

По умолчанию используется `/api` (относительный путь).

### 7. Структура таблицы в базе данных

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

### 8. Проверка работы

После настройки API:

1. Откройте лендинг в браузере
2. Нажмите кнопку "Купить"
3. Заполните форму и отправьте
4. Проверьте в базе данных, что данные сохранились
5. Проверьте консоль браузера на наличие ошибок

### 9. Безопасность

Рекомендуется добавить:
- Валидацию данных на сервере
- Защиту от спама (rate limiting)
- Защиту от SQL-инъекций (используйте параметризованные запросы)
- HTTPS для передачи данных
