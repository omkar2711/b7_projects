// server.mjs
import { createServer } from 'node:http';
import fs from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'node:url';
import os from 'node:os';


const server = createServer((req, res) => {
  if(req.url === '/'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('<h1>Welcome to the home page</h1>')
  }
  else if(req.url === '/about'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('<h1>About us Page</h1>')
  }
  else if(req.url === '/product'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('<h1>Product Page</h1>')
  }
  else if(req.url === '/contact'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('<h1>Contact us Page</h1>')
  }
  else{
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('<h1>404 page not Found</h1>')
  }
});


// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

fs.writeFile('file.txt', 'before : Hello World!gfhjgjhg' , (err, data) => {
  if(err) throw err;
  console.log("File has been saved");
});

fs.readFile('file.txt', 'utf-8', (err, data) => {
  if(err) throw err;
  console.log(data);
});

fs.writeFile('file.txt', 'after : Hello World!' , (err, data) => {
  if(err) throw err;
  console.log("File has been saved");
});
// run with `node server.mjs`


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("File Name: ", __filename);
console.log("Directory Name: ", __dirname);

console.log(os.type()); //os type
console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.release());
console.log(os.uptime());
console.log("Total Memory: ", os.totalmem()/ (1024*1024*1024), "GB");
console.log("Free Memory: ", os.freemem()/ (1024*1024*1024),"GB");
// console.log(os.networkInterfaces()); //IP address

