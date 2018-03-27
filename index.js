const express = require("express");
const reload = require("reload");
const app = express();

app.set('view engine' , 'ejs');

app.use(express.static('public'));

app.get('/' , (req , res) => {
    res.render('main');
});

app.listen(3000 , () => console.log("Start Server"));
reload(app);
