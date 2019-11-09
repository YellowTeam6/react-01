### xxx餐厅管理系统

### 后端的api接口   后端
1. 登录 http://10.60.12.65:3005/admin/user/login
    us:123
    ps:123
2. 注册
3. 商品管理
   a.商品的查询
    分页查询 v  http://10.60.12.65:3005/admin/food/findByTypePage
    模糊查询 v  http://10.60.12.65:3005/admin/food/foodByKw
    分类查询 v
   b.商品的添加  v  http://10.60.12.65:3005/admin/food/add
                {String} name 
                {String} desc 
                {String} img  
                {String} price  
                {String} foodtype 
                {String} token   令牌 
   c.商品的删除  v  http://10.60.12.65:3005/admin/food/del
     c1.单选删除 v
     c2.多选删除 
   d.商品的修改   v http://10.60.12.65:3005/admin/food/updata
4. banner管理
  1.添加图片（广告位） push false
  2. 修改信息
  3. 删除图片
  4. 图片的数据查询 
5. 用户管理
  1. 查看所有用户
  2. 删除用户
  3. 添加用户
  4. 修改用户信息
### 写前端界面
[hui](http://www.h-ui.net/H-ui.admin.shtml)
###  通过ajax 实现前后端交互