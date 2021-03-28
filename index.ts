import * as http from "http";
import * as url from 'url';

const sum = (a: number, b: number) => a + b;

http.createServer((req, res) => {
    const queryObject = url.parse(String(req.url), true).query;
    const responseSum = sum(Number(queryObject.a), Number(queryObject.b))
    res.end(String(responseSum));
}).listen(3000);

