const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const ip = require('ip');

app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use((req, res, next) => {
	next()
})
app.use(express.static(__dirname+'/public/'));
app.set('views', (__dirname));

//routes
app.get('/', (req,res) => {
	res.render('./index.html');
})

//app.post('/feed', (req,res) => {
//	console.log("server.js /feed ");
//})
console.log("Server listening on "+ip.address()+":1903.");
app.listen(1903)
