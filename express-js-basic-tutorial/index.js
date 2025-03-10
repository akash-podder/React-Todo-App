const express = require('express');

const app = express();

app.use(express.json()); // to Parse "Request BODY" as "json" (Content-Type: application/json)

const myPORT=3000;

app.get('/', (req, res) => {
    res.send('This is Real Madrid Home Page');
});

app.post('/', (req, res) => {
    res.send('This is POST Request for `/` URL');
});

app.listen(myPORT, () =>{
    console.log(`RMA Server listening on port ${myPORT}`);
})