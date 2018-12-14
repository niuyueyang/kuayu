var express=require('express');
var app=express();
var Websocket=require('ws');
var wss=new Websocket.Server({port:4000});
wss.on('connection',function(ws){
	ws.on('message',function(data){
		ws.send('我来自于服务端');
		console.log(data)
	})
})

