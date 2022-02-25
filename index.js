http=require('http');
fs=require('fs');
url=require('url');


http.createServer((req,res)=>{
  
    let q=url.parse(req.url,true);
    
    if(req.url!='/favicon.ico'){
        console.log(q.pathname);
     if(q.pathname=="/"){
         
        let index=fs.readFileSync('index.html');
        res.writeHead(200,{'content-type':'text/html'});
        res.write(index);
     }
     else if(q.pathname=="/profile"){
        res.writeHead(200,{'content-type':'text/html'});

         res.write('welcome asim sheikh');
     }

    else{
        let filename=q.pathname;
         res.writeHead(200,{"content-type":"text/html"})
         res.write(q.pathname+' not found')
    }
}
   
}).listen(8080);

console.log('server code has no error')

