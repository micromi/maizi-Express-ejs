// 导入http模块
var http = require("http");
// 导入express框架
var express = require("express");
// 得到app对象
var app = express();
// 将app对象注册在原生的nodejs http模块中
http.createServer(app);

// 处理用户请求(路由)
app.get("/demo", function(req,res) {
  console.log("hello server!");
  res.send("hello");
  res.end();
});

// 监听端口
app.listen(3000);

