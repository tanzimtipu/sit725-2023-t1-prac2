let expess = require('express');
let app = expess();
let port = process.env.port || 3000;

app.use(expess.static(__dirname + '/'));

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers', (req,res)=>{
    //grab values from url parameter
    let num1 = req.query.number1;
    let num2 = req.query.number2;

    //do math
    let sum = parseInt(num1) + parseInt(num2);

    //construct response, include: statusCode, message, data
    let obj = {statusCode:200, message: 'success', data:sum}

    //then send back
    res.json(obj)
});

app.listen(3000, ()=>{
    //logic to fire server start
    console.log('server started');
}); 