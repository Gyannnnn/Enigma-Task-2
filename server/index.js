const express = require('express')
const cors  = require('cors')
const pdf = require('html-pdf')
const app = express()
const port = 4000;
const pdfSample = require('./pdf-sample/index')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.send("Hello")
});

app.post("/create-pdf",(req,res)=>{
    pdf.create(pdfSample(req.body),{}).toFile("My rsume.pdf",(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Created Successfully");
        }
    })
});
app.get("/fetch-pdf",(req,res)=>{
    res.send(`${__dirname}/My resume.pdf`)
});
app.use(express.static("../client/build"))
app.listen(port,()=>{
    console.log(`Server Is Running At ${port}`);
});