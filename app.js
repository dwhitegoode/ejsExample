const app = require('express')();
const ejscon = require('./data/bikeRepo.js');

app.set('view engine','ejs')

app.get('/',(req,res) =>{
    res.send('testing webservice')
});

app.get('/list',(req,res)=>{
    ejscon.getBike({}, x=>{
        res.render('bikeRepo',{d:x});
    })
})

app.listen(3030)
console.log('listening on port 3030!')