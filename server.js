const express = require('express');
"hello my name is Ryn Suh"

const app = express();

const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);






const port = 3000;
app.listen(port, console.log("server started.."));