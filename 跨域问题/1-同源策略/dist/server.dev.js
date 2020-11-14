"use strict";

var express = require('express');

var app = express();
app.get('/home', function (request, response) {
  //设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*'); //设置响应头 所有类型的头信息都可以接搜

  response.setHeader('Access-Control-Allow-Headers', '*');
  response.sendFile(__dirname + '/index.html');
});
app.get('/data', function (request, response) {
  //设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*'); //设置响应头 所有类型的头信息都可以接搜

  response.setHeader('Access-Control-Allow-Headers', '*');
  response.send('用户数据');
});
app.listen(8000, function () {
  console.log('服务器启动成功...');
});