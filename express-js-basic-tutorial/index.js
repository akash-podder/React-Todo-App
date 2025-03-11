const express = require('express');
const path = require('path')

const app = express();

app.use(express.json()); // to Parse "Request BODY" as "json" (Content-Type: application/json)

const myPORT=3000;

// "Logging Middleware"
const ramosLogMiddleware = (req, res, next)=>{
    console.log("RamosLogMiddleware: " + req);
    next()
}
app.use(ramosLogMiddleware)


// Default Behavior
// When a client requests /, Express first checks if there is a static file matching the request.
// If public/index.html exists, it is served automatically before the app.get('/') handler is reached.
// This happens because express.static() is middleware, and middleware is executed in the order it is defined.
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.send('This is Real Madrid Home Page');
});

app.post('/', (req, res) => {
    res.send('This is POST Request for `/` URL');
});


app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' +  req.params.name)
})

app.get('/about', (req, res) => {
//   res.send('about')
// res.sendFile(path.join(__dirname, 'index.html'))
// res.status(500)
    res.json({"ramos": 4})
})

app.listen(myPORT, () =>{
    console.log(`RMA Server listening on port ${myPORT}`);
})