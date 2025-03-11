# Getting Started with Express JS

## Available Scripts

In the project directory, you can run:

### `node index.js`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Deployment
```
sudo apt install build-essential
```
Let's install `PM2`, a process manager for Node.js applications. PM2 makes it possible to daemonize applications so that they will run in the background as a service.
```
npm install pm2@latest -g
```
```
pm2 start index.js
pm2 stop index.js
```
Applications that are running under PM2 will be restarted automatically if the application crashes or is killed, but we can take an additional step to get the application to launch on system startup using the startup subcommand. This subcommand generates and configures a startup script to launch PM2 and its managed processes on server boots:
```
pm2 startup systemd
```
```
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ramos --hp /home/ramos
pm2 save
sudo systemctl start pm2-ramos
systemctl status pm2-ramos
```
```
pm2 stop app_name_or_id
pm2 restart app_name_or_id
pm2 list
pm2 info app_name
pm2 monit
```

Now, configure Nginx as a Reverse Proxy Server

```
sudo vim /etc/nginx/sites-available/example.com
```
```
server {
...
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
...
}
```

```
sudo nginx -t
sudo systemctl restart nginx
```