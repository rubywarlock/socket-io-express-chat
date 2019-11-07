### Запуск
```text
npm install
pm2 start [server-app].js
# в скобках main файл приложения и если установлен pm2
```
### Если с нуля

##### инициализация проекта
```text
npm init
```

##### установка socket.io
```
npm install socket.io --save
```

##### установка express
```
npm install express --save
```

##### установка менеджера процессов для js, pm2
```
sudo npm install pm2 -g
```


### nginx config
```
server {
    listen 80;

	root [path to app];
    index index.html;

	server_name chat-socketio;

    error_log [path to app]/log/error.log  warn;

	# Указываем IP адрес сервера
	# server_name 127.0.0.1;
	# Если мы обращаемся по любому УРЛ начиная с /
	# то сервер будет обрабатывать NodeJS

	location / {
		# Тут указываем IP или Url и порт (8010) для NodeJS
		# поскольку Nginx будет висеть на 80 порту
		proxy_pass http://127.0.0.1:8010;
		proxy_set_header Host $host;
	}
}

```

##### прописать /etc/hosts
так как в конфиге nginx прописано `server_name chat-socketio;`

то в файле /etc/hosts:
```
127.0.0.1   chat-socketio
```
