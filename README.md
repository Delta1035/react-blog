# react-blog

remote site
http://124.221.95.189:8084/cms

# github action 遇到的问题
1. https://github.com/docker/build-push-action/issues/558

2. 使用密码登录远程ssh一直报错,换private key登录 https://github.com/appleboy/ssh-action/issues/104

3. 构建时内存泄漏问题
Node.js v8.0 开始，可以使用NODE_OPTIONS 环境变量来全局设置 max_old_space_size 来增加内存限制

export NODE_OPTIONS=--max_old_space_size=4096
https://blog.csdn.net/qq_42937522/article/details/123387368
# react 类型问题
1. props类型需要标注,否则ts检测会报错
