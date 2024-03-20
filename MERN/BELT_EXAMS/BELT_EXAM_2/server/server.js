const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

require('dotenv').config();

app.use(cookieParser());

app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');

require('./routes/pirates.routes')(app);
require('./routes/user.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})


// const express = require('express');
// const cors = require('cors'); 
// const app = express();
// const port = 8000;            
    
// app.listen(port, () => console.log(`Listening on port: ${port}`) );
