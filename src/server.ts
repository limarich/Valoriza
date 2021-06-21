import express from "express";

const app = express();

app.get("/",(request,response)=>{
    return response.send({"msg":"bem vinda(o)"})
})

app.listen(3000,()=>{console.log("Server rodando")});
