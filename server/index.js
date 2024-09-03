const express = require('express');
const cors = require('cors');
require('dotenv').config()
const connectDB = require('./config/db');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');

const app = express();
app.use(cookieParser());
// Increase payload size limit
app.use(bodyParser.json({ limit: '10mb' })); 
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
const PORT =   8080 || process.env.PORT;


app.use(express.json());

app.use(cors(
  {
    origin: process.env.CLIENT_URL,
    credentials: true,
  }
));

app.use('/api', router);
app.post('/api/Register', (req, res) => {
    res.send('Registration successful');
  });


connectDB().then(() => {
    console.log('MongoDB connected...');
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
});
});
