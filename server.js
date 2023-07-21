let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers', (req,res)=>{
    // grab values from url parameter
    let num1 = req.query.number1;
    let num2 = req.query.number2;

    // Add
    let sum = parseInt(num1) + parseInt(num2);

    // construct response, include: statusCode, message, data
    let obj = {statusCode:200, message: 'success', data:sum}

    // send back as json object
    res.json(obj)
});

app.get('/multiplyTwoNumbers', (req,res)=>{
    // grab values from url parameter
    let num1 = req.query.number1;
    let num2 = req.query.number2;

    // Multiply
    let product = parseInt(num1) * parseInt(num2);

    // construct response, include: statusCode, message, data
    let obj = {statusCode:200, message: 'success', data:product}

    // send back as json object
    res.json(obj)
});

app.listen(port, ()=>{
    // logic to fire server start
    console.log('Server started on port ' + port);
});
