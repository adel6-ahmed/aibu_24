const express = require('express');
const app = express();
require('express-async-errors');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adellhmt:D6Txn5YeNX2pOHkh@cluster0.6oxyknn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => console.log(err));


app.use(require('cors')());
app.use(express.json());

require('./routes')(app);


app.use(express.static('client/build'));
app.get('*', (req, res) => res.sendFile(`${__dirname}/client/build/index.html`));

app.use(require('./middlewares/error'));

app.listen(process.env.PORT || 3001);