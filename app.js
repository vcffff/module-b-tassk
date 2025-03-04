const fs = require('fs');
const csv = require('csv-parser');
const http = require('http');




const results = [];

fs.createReadStream('service_usages.csv')
  .pipe(csv())
  .on('data', (row) => {
    results.push(row);
  })
  .on('end', () => {
    console.log(JSON.stringify(results, null, 3));
    fs.writeFileSync('output.json', JSON.stringify(results, null, 3)); 
  });








const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("index.html");
});

server.listen(8080, () => console.log("Static server running on port 8080"));
