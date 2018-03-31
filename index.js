var express = require("express");
var app = express();
var { Singer , singers } = require("./Singer"); 
var parser = require("body-parser").urlencoded({extended:false});

app.use(parser);
app.set("view engine" , "ejs");
app.set("views" , "./views");

var reload = require("reload");

app.get("/" , (req , res) => res.render("index" , {singers}));

app.get("/remove/:id" , (req , res) => {
    const { id } = req.params;
    const checkID = singers.indexOf(singers.id === id);
    if(checkID >= 0){
        return res.send("KHông tìm thấy");
    }
    singers.splice(checkID , 1);
    res.redirect("/");
});

app.get("/update/:id" , (req , res) => {
    const singer = singers.find(singer => singer.id === +req.params.id)
    if(!singer) return res.send("Không tìm thấy a ");
    res.render("update" , { singer });
});

app.post("/update/:id" , (req , res) => {
    const { name , link , image } = req.body;
    const singer = singers.find(singer => singer.id === +req.params.id);
    if(!singer) res.send("Không thấy cái id này");
    singer.name = name ;
    singer.image = image;
    singer.link = link;
    res.redirect("/");
});

app.get("/add" , (req , res) => res.render("add"));

app.post("/add" , (req , res) => {
    const { name , link , image } = req.body;
    const singer = new Singer(name , link , image);
    singers.push(singer);
    res.redirect("/");
});

app.listen(3000 , () => console.log("Start Server"));

