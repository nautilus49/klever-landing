# Деплой Klever Landing на свой сервер

Инструкция: как поставить лендинг на главную домена, отключить старый проект и оставить API.

---

## 1. Подготовка проекта локально

Уже сделано: в `vite.config.js` стоит `base: '/'` для главной страницы.

Соберите проект:

```bash
npm ci
npm run build
```

Готовый сайт будет в папке **`dist/`** — её нужно залить на сервер.

---

## 2. Подключение к серверу

Подключитесь по SSH (подставьте свой хост и пользователя):

```bash
ssh user@your-server.com
```

Или с ключом:

```bash
ssh -i ~/.ssh/your_key user@your-server.com
```

---

## 3. Разведка на сервере

Выполните на сервере и сохраните вывод — по нему можно будет точно настроить конфиги.

**Где лежит старый сайт и как отдаётся:**

```bash
# Веб-сервер (часто nginx или apache)
sudo systemctl status nginx
# или
sudo systemctl status apache2

# Конфиги nginx (если nginx)
sudo ls -la /etc/nginx/sites-enabled/
sudo cat /etc/nginx/sites-enabled/default
# или конфиг вашего домена
sudo cat /etc/nginx/sites-enabled/your-domain.conf
```

**Где корень старого сайта (document root):**

В конфиге nginx ищите `root /какой-то/путь;` — это папка со статикой текущего сайта.

**Где API:**

Ищите в конфигах `location /api` или `proxy_pass` на порт бэкенда (например 3000, 8080).

```bash
sudo grep -r "api\|proxy_pass" /etc/nginx/
```

**Текущая структура (пример):**

```bash
ls -la /var/www/
# или
ls -la /home/user/
```

---

## 4. Загрузка Klever на сервер

**Вариант A: через SCP с вашего компьютера**

Из папки проекта (где есть `dist/`):

```bash
scp -r dist/* user@your-server.com:/путь/куда/положить/klever/
```

Пример, если на сервере сайт в `/var/www/html`:

```bash
# Сначала на сервере сделайте бэкап и создайте папку
# ssh user@server "sudo cp -r /var/www/html /var/www/html.backup && sudo mkdir -p /var/www/klever"

scp -r dist/* user@your-server.com:/tmp/klever-dist/
# Потом на сервере: sudo mv /tmp/klever-dist/* /var/www/klever/
```

**Вариант B: через rsync**

```bash
rsync -avz --delete dist/ user@your-server.com:/путь/куда/положить/klever/
```

**Вариант C: через Git на сервере**

На сервере:

```bash
cd /var/www
sudo git clone https://github.com/ВАШ_РЕПО/klever-landing.git
cd klever-landing
npm ci
npm run build
# Дальше в nginx указать root на /var/www/klever-landing/dist
```

---

## 5. Настройка Nginx (главная = Klever, оставить API)

Пример конфига: **главная** отдаёт лендинг из `dist`, **API** проксируется на бэкенд.

Создайте/отредактируйте конфиг (имя файла под свой домен):

```bash
sudo nano /etc/nginx/sites-available/your-domain.conf
```

**Пример конфига:**

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # Главная — статика Klever Landing (собранная папка dist)
    root /var/www/klever;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API — проксируем на бэкенд (подставьте порт вашего API)
    location /api/ {
        proxy_pass http://127.0.0.1:3000/;   # или тот порт, где крутится API
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Статика (картинки, css, js)
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

- Замените `your-domain.com` на ваш домен.
- Замените `root /var/www/klever` на реальный путь до папки с содержимым `dist`.
- В `proxy_pass` укажите порт и путь вашего API (например `http://127.0.0.1:8080/`).

Включите сайт и перезагрузите nginx:

```bash
sudo ln -sf /etc/nginx/sites-available/your-domain.conf /etc/nginx/sites-enabled/
# Отключите старый конфиг, если он отдельный:
# sudo rm /etc/nginx/sites-enabled/old-site.conf

sudo nginx -t
sudo systemctl reload nginx
```

---

## 6. Отключение старого проекта

- В `sites-enabled` удалите или переименуйте конфиг старого сайта (чтобы nginx его не подхватывал).
- Старую папку с файлами можно не удалять сразу — переименуйте, например в `html.old`, чтобы был бэкап.

---

## 7. HTTPS (SSL)

Если ещё нет сертификата (Let's Encrypt):

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Certbot сам поправит nginx для HTTPS.

---

## 8. Подключение формы к API (позже)

В проекте форма в `OrderModal.jsx` пока только логирует данные. Когда будете готовы слать заявки на ваш API, в `handleSubmit` нужно добавить `fetch` на ваш endpoint, например:

```javascript
const res = await fetch('/api/order', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, contact }),
})
```

Убедитесь, что в nginx есть `location /api/` и он проксируется на нужный бэкенд.

---

## Краткий чеклист

- [ ] Локально: `npm run build`, папка `dist` готова
- [ ] Подключиться по SSH к серверу
- [ ] Узнать: nginx/apache, document root, где API и порт
- [ ] Загрузить содержимое `dist/` в нужную папку на сервере
- [ ] Настроить nginx: root = папка с dist, location /api — proxy на бэкенд
- [ ] Отключить старый сайт в sites-enabled
- [ ] `nginx -t` и `reload nginx`
- [ ] При необходимости: certbot для HTTPS
- [ ] Проверить в браузере главную и вызов API

Если пришлёте вывод команд из раздела «Разведка на сервере» (без паролей и секретов), можно будет подставить ваши пути и порты в готовый конфиг nginx и прислать точный вариант под ваш сервер.
