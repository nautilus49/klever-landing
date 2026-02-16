# Обновление API endpoints для klever-landing

## Изменения

Фронтенд обновлен для работы с API под префиксом `/klever/` вместо `/api/`.

## Что было изменено

### 1. `src/services/api.js`
- ✅ Базовый URL изменен с `/api` на `/klever`
- ✅ Добавлена проверка поля `success` в ответах API
- ✅ Улучшена обработка ошибок с проверкой структуры ответа

### 2. `.env.example`
- ✅ Обновлен пример переменной окружения: `VITE_API_URL=/klever`

### 3. `src/components/OrderModal.jsx`
- ✅ Улучшена обработка ответов API
- ✅ Обработка ошибок уже была реализована корректно

## Endpoints API

### POST `/klever/orders`
**Запрос:**
```json
{
  "name": "Иван Иванов",
  "contact": "+79991234567",
  "timestamp": "2026-02-16T10:30:00.000Z"
}
```

**Успешный ответ (200):**
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

### GET `/klever/availability`
**Ответ:**
```json
{
  "available": false
}
```

## Проверка работы

После деплоя проверьте в браузере (DevTools → Network):

1. **POST запрос** должен идти на: `https://kleversafe.ru/klever/orders`
2. **GET запрос** должен идти на: `https://kleversafe.ru/klever/availability`
3. Ответы должны содержать поле `success` и `message`

## Переменные окружения

Если нужно изменить URL API, создайте файл `.env` в корне проекта:

```env
VITE_API_URL=/klever
```

Или для другого домена:
```env
VITE_API_URL=https://api.your-domain.com
```

**Важно:** После изменения `.env` нужно пересобрать проект (`npm run build`).
