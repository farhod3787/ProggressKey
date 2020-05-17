const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cron = require('node-cron');

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/users');
const registrarRouter = require('./routes/registrar');
const wareHouseRouter = require('./routes/wareHouse');
const userTypeRouter = require('./routes/userType');
const filialRouter = require('./routes/filial');

const productRouter = require('./routes/products');
const categoryRouter = require('./routes/category');
const contactRouter = require('./routes/contact');
const newsRouter = require('./routes/news');
const transferRouter = require('./routes/transfer');
const reqProductsRouter = require('./routes/reqProduct');
const managerRouter = require('./routes/site-manager');
const sendProductRouter = require('./routes/sendProduct');

const test = require('./routes/ball');

const cors = require("cors");
const app = express();

app.use(cors());


// mongoose.connect('mongodb+srv://farhod:7Q8SfcHx.F2J.HG@cluster0-uf7cc.mongodb.net/progresskey?retryWrites=true', { useNewUrlParser: true })
//     .then(() => {
//         console.log('MongoDB connected.');
//     })
//     .catch(err => console.log(err));

mongoose.connect("mongodb://localhost:27017/progresskey").then( () => {
    console.log('Connected to database')
})
.catch( () =>{
    console.log('Error in connected database')
});

module.exports = { mongoose };

// app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/', express.static(path.join(__dirname, '../dist/online-pharmacy')))

app.use('/images', express.static(path.join("backend/images")));
// app.use('/recipe', express.static(path.join("backend/recipe")));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-Width, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next()
});

app.use('/api/admin', adminRouter);
app.use('/api/users/', userRouter);
app.use('/api/registrar/', registrarRouter);
app.use('/api/warehouse/', wareHouseRouter);
app.use('/api/userType/', userTypeRouter);
app.use('/api/news/', newsRouter);
app.use('/api/filial/', filialRouter)
app.use('/api/products/', productRouter);
app.use('/api/category/', categoryRouter);
app.use('/api/contact/', contactRouter);
app.use('/api/transfers/', transferRouter);
app.use('/api/reqProducts/', reqProductsRouter);
app.use('/api/manager/', managerRouter);
app.use('/api/sendProduct/', sendProductRouter);
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dist/online-pharmacy', 'index.html'))
// })


cron.schedule('* * * * * *', () => {
  var id = '5eba380af269c4319880521e';
  // test.test(id);
});

module.exports = app;
