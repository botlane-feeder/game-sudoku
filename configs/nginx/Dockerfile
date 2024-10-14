FROM nginx:1.27

RUN mkdir -p /etc/nginx
# COPY ./configs/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./configs/nginx/nginx.conf /etc/nginx/nginx.conf

# CMD ["nginx", "-g", "daemon off;"]