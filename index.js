const express = require("express")
const path = require("path")
const app = express()
app
.use("/", require("./routes/routes"))
.use(express.static(__dirname + '/public'))
.set('view engine', 'ejs')
.set("views", path.join(__dirname, "/views"))
.use(express.urlencoded({extended: true}))
app.listen((process.env.PORT || 3000), () => {
    console.log('pagina prendida');
  });

 