var express = require("express");
var bodyParser = require("body-parser");

const app = express();
var items = [];
let workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Server started at port 3000");
});
