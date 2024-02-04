const express=require('express');
const path=require('path');


const app=express();
const port=process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));

app.use(express.static('assets'));
app.set('view engine','html');


const routes=require('./server/routes/soccerRouters.js');
app.use('/',routes);

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
});