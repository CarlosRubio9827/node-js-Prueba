const express = require("express");
const app = express();
const path = require("path");
//SEtting Express
app.set('port', 3000);
app.set('view engine', "ejs");
app.set("views", path.join(__dirname, "views"))

//Middlewares


//Rutas
app.use(require("./routes/index"));



//Static files

app.use(express.static(path.join(__dirname, "public")))

//Listening server
app.listen(app.get('port'), function(){
    console.log("Server on port ", app.get('port'));
});
