FROM nginx:1.23.3
LABEL auth_email="528491526@qq.com" 
LABEL auth_name="delta" 
COPY ./dist /usr/share/nginx/html
# 复制nginx的配置文件
COPY ./default.conf /etc/nginx/conf.d/default.conf