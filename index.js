//cargamos la dependencia express
const express = require('express');
//creamos una nueva app cpn express
const app = express();
app.set('view engine', 'ejs');

//(intentar) responder a todas las peticionesd
// con la carpeta 
app.use(express.static('public'));
//definir puerto
const port = 3000;

const specialDay = 26;
//month base 0
const specialMonth = 4; //december

//when root url is requeted (/)
//http get method

app.get('/', (req, res) => {
    let currentDate = new Date();

   let currentDateOfTheMonth = currentDate.getDate();
   let currentMonth = currentDate.getMonth();

   if(currentDateOfTheMonth === specialDay && currentMonth === specialMonth){
       //res.send('YES');
       res.render('index',{message: 'YES'});
       

   } else{
       res.render('index',{message: 'NO'});
   }

});
//arrancar el servidor en e puerto indicado
app.listen(port, () =>{
    //console.log('server listening on port' + port);
    //funcione que se manda llamar cuando el servidor
    //arranca
    console.log(`server listening on port ${port}`);
});