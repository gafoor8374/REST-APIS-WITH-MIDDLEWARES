const express=require('express');

const app = express();


// get:-retrieve a list of items or single item;
//post :- save something on the server or the debugger
//put/patch:- update an item ,put replaces the item and patch is append to item
//delete :- delete an item

//middleware:-it is parse  request body

app.get("/",(req,res)=>{
    console.log("req",req);
    // next();
    // res.send("home page get request")
})

app.post("/",(req,res)=>{
    console.log("req.body",req.body);
    console.log("home page post request");
});

// app.use(logger);


// function logger(req, res,next){} {
//     console.log("logging before");
//     next();
//     console.log('logging after');
// }
app.listen(1234,()=>{
    console.log('listening on port 1234');
});