var express=require('express');
var app=express();
var whiteList=['http://127.0.0.1:8020']

app.use(function(req,res,next){
	let origin=req.headers.origin;
	if(whiteList.includes(origin)){
		res.setHeader('Access-Control-Allow-Origin',origin);//请求源
		res.setHeader('Access-Control-Allow-Headers','name');//设置请求头
		res.setHeader('Access-Control-Allow-Methods','PUT');//请求方法
		res.setHeader('Access-Control-Allow-Credentials',true);//携带cookie凭证
		res.setHeader('Access-Control-Expose-Headers','name');//允许哪个头返回
/*		if(req.method=='OPTIONS'){
			res.end();
		}*/
	}
	next();
})
app.get('/getData',function(req,res){
	res.setHeader('name','bbb');//将头返回给前端
	res.end('我是4000端口服务端');
})
/*app.put('/getData',function(req,res){
	res.end('我是4000端口服务端');
})*/

app.listen(4000);
console.log('监听成功 4000');
