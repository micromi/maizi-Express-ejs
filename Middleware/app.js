// 导入http模块
// var http = require("http");
// 导入express框架
var express = require("express");
var morgan = require('morgan');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var favicon = require('serve-favicon');
// 得到app对象
var app = express();
// 将app对象注册在原生的nodejs http模块中
// http.createServer(app);

// 静态文件中间件
app.use("/", express.static(__dirname + "/public"));
// 日志处理中间件
app.use(morgan('combined'));
// post 方式提交时请求提数据解析
app.use(bodyParser());
// 解析get方式提交的数据 (好像不支持了)
// app.use(express.query());
// cookie解析
app.use(cookieParser());
// 启用session管理用户状态
app.use(session({
  secret: "keyboard cat",
  key: "sid",
  cookie: {secure: true}
}));
// 网站图标处理中间件
// app.use(favicon());
app.use(favicon(__dirname + '/public/favicon.ico'));
// 学习网站 http://blog.fens.me/nodejs-connect/

// app.use("/", function(req, res, next) {
//   console.log("自定义中间件！");
//   next();
// });
// 处理用户请求(路由)
// app.get("/index", function(req, res) {
//   console.log("hello server!");
//   res.send("hello");
//   res.end();
// });

app.all("/", function(req, res, next) {
  console.log("=========");
  console.log(req.query);
  console.log(req.body); // bodyParser 解析后数据
  res.send("hello browser!");
  res.end();
});

// 监听端口
app.listen(3000, function(err) {
  if (err) {
    console.log("服务器出错！");
  } else {
    console.log("服务器启动成功，监听3000端口！")
  }
});

