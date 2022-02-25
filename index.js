http=require('http');
fs=require('fs');
url=require('url');
const exp = require('constants');
let express=require('express');
let server=express()
const PORT=process.env.PORT || 5000;

server.get('/',(req,res)=>{
    res.send('welcome to asim\'s server');
})























// http.createServer((req,res)=>{
  
//     let q=url.parse(req.url,true);
    
//     if(req.url!='/favicon.ico'){
//         console.log(q.pathname);
//      if(q.pathname=="/"){
         
//         let index=fs.readFileSync('index.html');
//         res.writeHead(200,{'content-type':'text/html'});
//         res.write(index);
//      }
//      else if(q.pathname=="/profile"){
//         res.writeHead(200,{'content-type':'text/html'});

//          res.write('welcome asim sheikh');
//      }

//      else if(q.pathname=="/skills"){
         
//      }

//     else{
//         let filename=q.pathname;
//          res.writeHead(200,{"content-type":"text/html"})
//          res.write(q.pathname+' not found')
//     }
// }
   
// }).listen(PORT);

console.log('server code has no error')

