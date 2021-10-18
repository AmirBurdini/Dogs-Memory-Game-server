let mongoose = require('mongoose')

mongoose.connect(procces.env.DB_URL,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
})