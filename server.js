//npm install -g nodemon
//使用nodemon使服务器自动刷新  nodemon server.js
//1：引入express
const { request, response } = require('express');
const express = require('express');

//2：创建应用对象
const app = express();

//3：创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send('HELLO AJAX GET');
});

app.post('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应头 所有类型的头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    response.send('HELLO AJAX POST');
});


//接收任意类型的请求 get post等
app.all('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应头 所有类型的头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    response.send('HELLO AJAX POST');
});


//接搜JSON数据 Ajax_study\原生AJAX\3-JSON.html
app.all('/json-server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应数据
    const data = {
        name: 'anguish'
    };
    //对对象进行字符串的转换
    let str = JSON.stringify(data);

    response.send(str);
});


//针对 IE 缓存  Ajax_study\原生AJAX\4-IE缓存问题.html
app.get('/ie', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send('HELLO IE');
});


//延时响应  Ajax_study\原生AJAX\5-超时与网络异常.html    Ajax_study\原生AJAX\6-取消请求.html   Ajax_study\原生AJAX\7-重复请求问题.html
app.get('/delay', (request, response) => {
    //设置西应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置延时效果
    setTimeout(() => {
        //设置响应体
        response.send('延时响应');
    }, 3000);
});


//Jquery 服务  Ajax_study\JQuery发送AJAX请求\get,post,通用型方法.html
app.all('/jquery-server', (request, response) => {
    //设置西应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应头 所有类型的头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers', '*');

    //response.send('Hello JQuery AJAX');


    const data = { name: 'Jquery 发送AJAX请求' };

    //  将数据类型转换为string类型
    response.send(JSON.stringify(data));
});


//axios 服务  Ajax_study\axios发送AJAX请求\axios.html
app.all('/axios-server', (request, response) => {
    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应头 所有类型的头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = { name: 'axios 发送AJAX请求' };

    //将数据转换为string类型
    response.send(JSON.stringify(data));
});


//fetch 服务  Ajax_study\fetch发送AJAX请求\fetch函数.html
app.all('/fetch-server', (request, response) => {
    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应头 所有类型的头信息都可以接搜
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = { name: 'fetch 发送AJAX请求' };

    //将数据转换为string类型
    response.send(JSON.stringify(data));
});


//jsonp服务  Ajax_study\跨域问题\2-JSONP\1-原理.html
app.all('/jsonp-server', (request, response) => {

    //response.send('console.log("jsonp-server")');

    const data = {
        name: 'jsonp'
    };

    let str = JSON.stringify(data);

    response.end(`handle(${str})`);
});

//用户名检测是否存在  Ajax_study\跨域问题\2-JSONP\2-JSONP实践.html
app.all('/check-username', (request, response) => {

    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应头  所有类型的响应头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应数据
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };

    //将JSON类型数据转换为String类型
    let str = JSON.stringify(data);

    //向客户端发送数据
    response.end(`handle(${str})`);

});

//jquery-jsonp服务  Ajax_study\跨域问题\2-JSONP\3-jQuery-jsonp.html
app.all('/jquery-jsonp-server', (request, response) => {
    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应头 允许所有类型的响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置数据
    const data = {
        name: 'JQuery-jsonp-server',
        arr: ['向服务器发送请求', '服务器响应请求']
    };

    //将json类型数据转换为String类型
    let str = JSON.stringify(data);

    //接收 callback 参数
    let cb = request.query.callback;

    //向客户端发送请求信息
    response.end(`${cb}(${str})`);
});

//cors-server服务  Ajax_study\跨域问题\3-CORS\CORS.html
app.all('/cors-server', (request, response) => {
    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应头 允许所有类型的响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应头 允许所有类型的请求方法
    response.setHeader('Access-Contorl-Allow-Method', '*');

    //发送请求数据
    response.send('Hello Cors');

});

//4：监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...");
});