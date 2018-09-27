var express = require("express"),
app = express();


//initializing app
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
//index route

app.get("/",function (req,res) {
  res.render("index");
});

//error page

app.get("*",function (req,res) {
  res.render("error");
});

app.listen(process.env.PORT||8080,process.env.IP);
