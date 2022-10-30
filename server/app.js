const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const app=express();
const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');
// const { writer } = require("repl");
//connection url
const url='mongodb://localhost:27017';
//database name
const dbName='database';

const client=new MongoClient(url);
const db=client.db(dbName);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");
// const itemSchema={
//     id:Number,
//     dept:String,
//     query:String,
// };
// var sschema=new mongoose.Schema({
//     id:Number,
//     dept:String,
//     query:String
// });
// let row=mongoose.model("Query",sschema);

//creating collection
// const Item=mongoose.model("Query",itemSchema);

// const item1=new Item({name:"Eat"});
// const item2=new Item({name:"dance"});
// const item3=new Item({name:"read"});
app.get("/",function(req,res){
    res.send("hello home page");
})
app.get("/complaint",function(req,res){
    res.render("index");
});
app.post("/complaint",function(req,res){
    const rno = parseInt(req.body.rno);
    const sname=req.body.sname;
    const dept=req.body.dept;
    const prob=req.body.prob;
    const phone=req.body.ph;
    // let q=req.body.query;
    // db.collection("Query").insertOne({id:id,dept:d,query:q},function(err,res){
    //     if (err) throw err;
    //     console.log("suucess");
    // })

    const newit={rno:rno,sname:sname,dept:dept,prob:prob,phone:phone };
    db.collection("Query").insertOne(newit,function(err,res){
        if (err) throw err;
        console.log("stored in database");
    });
    // const r={
    //     rno:rno,sname:sname,dept:dept,prob:prob,phone:ph 
    // }
    db.collection(dept).insertOne(newit,function(err,res){
        if (err) throw err;
        console.log("successfully sent to authority");
    });
    // if(d==="Transport"){
    //     db.collection
    // }
    // else if(d==="Aec"){

    // }
    // else if(d==="Sports"){

    // }
    // else if(d==="PlacementCell"){

    // }
    // else if(d==="Library"){

    // }
    // newit.save();
    res.redirect("/complaint");
    // console.log(id,d,q);

});
app.get("/advisor",function(req,res){
    res.render("advisorhome.ejs");
});
app.post("/advisor",function(req,res){
    corres=req.body.dept;

    db.collection(corres).find().toArray(function(err,res1){
        if (err) throw err;
        res.render("transport",{'newitems':res1})
    });
});

client.connect(function(err){
    assert.equal(null,err);
    console.log("Connected successfully to mongo database");
    app.listen(3000,function(){
        console.log("server started on port 3000");
    });
    
    // client.close();
})




// const express=require("express");
// const bodyParser=require("body-parser");
// const mongoose=require("mongoose");
// const app=express();
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));
// const MongoClient=require['mongodb'].MongoClient;
// const assert=require['assert'];
// const url='mongodb://localhost:27017';

// const db='database';
// app.set("view engine","ejs");


// app.get("/",function(req,res){
//     res.send("Hello");
// });
// app.listen(3000,function(){
//     console.log("server started on port 3000");
// })