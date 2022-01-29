// const fs = require('fs');

// const requestHandler=(req,res)=>{
//     const url=req.url
//     const method = req.method
//     if (url===`/`) {
//        let data= fs.readFileSync(`message.txt`)
//        let body=[]
//        body.push(data)
//        let parsed=Buffer.concat(body).toString()
//        console.log(parsed);
//        console.log(data);
       
//         res.write(`<html>`)
//         res.write(`<head><title>enter Message</title></head>`)
       
//         res.write(`<body>${parsed}<form method="post" action="/message"><input type="text" name="message"><button type="submit" >submit</button></form></body>`)
//         return res.end()
//     }
    
//     else if (url===`/message`&&method==`POST`){
//         let body=[]
//         req.on(`data`,(chunk)=>{
//             body.push(chunk)
//         })
//         req.on(`end`,()=>{
//             let parsed=Buffer.concat(body).toString()
//             let message=parsed.split(`=`)[1]
//             console.log(message);
//             fs.writeFileSync(`message.txt`,`${message}`)
//             res.statusCode=302
//             res.setHeader(`Location`,`/`)
//           return  res.end()
//         })
       
//     }
// }

// module.exports=requestHandler

//______________________________________________________________


const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';