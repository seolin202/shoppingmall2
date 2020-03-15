const express = require('express');

const app = express();

const mongoose = require('mongoose');



const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');



const mongoDBurl = 'mongodb+srv://seolin202:tjfdls0114**@cluster0-4lqvd.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDBurl, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('MongDB connected..'))
    .catch(err => console.log(err.message));





app.use('/products', productsRoute);
app.use('/orders', ordersRoute);






const port = 3000;
app.listen(port, console.log("server started.."));