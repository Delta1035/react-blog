<!--
 * @Author: delta 528491526@qq.com
 * @Date: 2022-10-29 17:47:44
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-04 22:21:13
 * @FilePath: \react-blog\README.md
 * @Description: 
 * 
-->
[![.github/workflows/main.yml](https://github.com/Delta1035/react-blog/actions/workflows/main.yml/badge.svg)](https://github.com/Delta1035/react-blog/actions/workflows/main.yml)

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

# 关于文件大小写问题
window环境下:
import delta from "@public/assets/images/delta_header_transparent.png";
可以正常引入 Delta_header_transparent.png

linux环境构建时会提示找不到Delta_header_transparent.png



### 待解决

- [ ] 分包 解决首页加载数据量太大的问题(拆分home和cms模块)
- [ ] 评论 点赞 收藏
- [ ] 文章右下角快速返回首部固定钉按钮
- [ ] 文章上一页 下一页
