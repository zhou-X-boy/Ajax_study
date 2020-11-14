"use strict";

//npm install -g nodemon
//使用nodemon使服务器自动刷新
//1：引入express
var _require = require('express'),
    request = _require.request,
    response = _require.response;

var express = require('express'); //2：创建应用对象


var app = express(); //3：创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装

app.get('/server', function (request, response) {
  //设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*'); //设置响应体

  response.send('HELLO AJAX GET');
});
app.post('/server', function (request, response) {
  //设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*'); //设置响应头 所有类型的头信息都可以接受

  response.setHeader('Access-Control-Allow-Headers', '*'); //设置响应体

  response.send('HELLO AJAX POST');
}); //接收任意类型的请求 get post等

app.all('/server', function (request, response) {
  //设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*'); //设置响应头 所有类型的头信息都可以接受

  response.setHeader('Access-Control-Allow-Headers', '*'); //设置响应体

  response.send('HELLO AJAX POST');
});
app.all('/json-server', function (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*'); //设置响应数据

  var data = {
    name: 'anguish'
  }; //对对象进行字符串的转换

  var str = JSON.stringify(data);
  response.send(str);
}); //针对 IE 缓存

app.get('/ie', function (request, response) {
  //设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*'); //设置响应体

  response.send('HELLO IE');
}); //延时响应

app.get('/delay', function (request, response) {
  //设置西应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*'); //设置延时效果

  setTimeout(function () {
    //设置响应体
    response.send('延时响应');
  }, 3000);
}); //4：监听端口启动服务

app.listen(8000, function () {
  console.log("服务已经启动，8000端口监听中...");
});