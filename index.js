const express = require('express');

const app = express();

app.use(logger);
app.use(logger1);

app.get("/user",(req, res) => {
    // console.log("user");

    return res.send({route: "/users"})
})

app.get("/student",(req, res) => {
    // console.log("students");

    return res.send({route :"/students"})
});

function logger1(req, res,next) {
    console.log("before route handler logger1");

    next();

    console.log("after route handler logger1")

}
function logger(req,res,next){
    console.log("before route handler logger");

    next();

    console.log("after route handler logger")
}

app.listen(5014,()=>{
        console.log('listening on port 5000');
});