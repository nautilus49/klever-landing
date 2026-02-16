// Утилита для работы с API
// URL API endpoint (можно переопределить через переменную окружения)
const API_BASE_URL = import.meta.env.VITE_API_URL || '/klever'

/**
 * Отправка данных заказа на сервер
 * @param {Object} data - Данные заказа { name: string, contact: string }
 * @returns {Promise<Object>} Ответ от сервера
 */
export async function submitOrder(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name.trim(),
        contact: data.contact.trim(),
        timestamp: new Date().toISOString(),
      }),
    })

    const responseData = await response.json().catch(() => ({ 
      success: false, 
      message: 'Ошибка сервера' 
    }))

    // Проверяем поле success в ответе
    if (!response.ok || !responseData.success) {
      throw new Error(responseData.message || `Ошибка ${response.status}`)
    }

    return responseData
  } catch (error) {
    // Если это ошибка сети или сервера
    if (error instanceof TypeError) {
      throw new Error('Не удалось подключиться к серверу. Проверьте подключение к интернету.')
    }
    throw error
  }
}

/**
 * Проверка наличия товара на складе
 * @returns {Promise<boolean>} true если товар есть в наличии
 */
export async function checkAvailability() {
  try {
    const response = await fetch(`${API_BASE_URL}/availability`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      // Если endpoint не существует, считаем что товар распродан
      return false
    }

    const data = await response.json()
    return data.available === true
  } catch (error) {
    // При ошибке считаем что товар распродан (показываем форму)
    console.warn('Не удалось проверить наличие:', error)
    return false
  }
}

/**
 * Подписка на уведомление о поступлении товара
 * @param {Object} data - Данные подписки { name: string, contact: string, product_type: string }
 * @param {string} data.product_type - Тип продукта: 'brelok' (брелок), 'braslet' (браслет), 'coupon' (кулон)
 * @returns {Promise<Object>} Ответ от сервера
 */
export async function subscribeNotification(data) {
  try {
    // Нормализуем тип продукта
    const productTypeMap = {
      'Брелок': 'brelok',
      'брелок': 'brelok',
      'Браслет': 'braslet',
      'браслет': 'braslet',
      'Кулон': 'coupon',
      'кулон': 'coupon',
    }
    
    const productType = productTypeMap[data.product_type] || data.product_type?.toLowerCase() || 'unknown'

    const response = await fetch(`${API_BASE_URL}/notifications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name.trim(),
        contact: data.contact.trim(),
        product_type: productType,
        timestamp: new Date().toISOString(),
      }),
    })

    const responseData = await response.json().catch(() => ({ 
      success: false, 
      message: 'Ошибка сервера' 
    }))

    // Проверяем поле success в ответе
    if (!response.ok || !responseData.success) {
      throw new Error(responseData.message || `Ошибка ${response.status}`)
    }

    return responseData
  } catch (error) {
    // Если это ошибка сети или сервера
    if (error instanceof TypeError) {
      throw new Error('Не удалось подключиться к серверу. Проверьте подключение к интернету.')
    }
    throw error
  }
}
