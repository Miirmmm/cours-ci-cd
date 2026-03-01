server {
    listen 80;
    server_name monapp.com;

    root /var/www/cours-ci-cd-react/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
