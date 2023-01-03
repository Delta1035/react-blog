FROM nginx:1.23.3
LABEL auth_email="528491526@qq.com" 
LABEL auth_name="delta" 
# 将所有文件移动到app目录
# ADD . /app/
# 设置工作目录为app
# WORKDIR /app
# RUN echo '来自本地构建的nginx镜像' > /usr/share/nginx/html/index.html
# 将dist目录的文件复制到html文件
# ADD ./dist /usr/share/nginx/html
RUN pwd
COPY ./dist /usr/share/nginx/html
# 复制nginx的配置文件
COPY ./nginx-custom.conf /etc/nginx/conf.d/nginx-custom.conf