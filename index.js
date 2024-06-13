const expresss = require("express")
const cors = require("cors")

const app = expresss()

app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(3000,()=>{
    console.log(`App listening on port ${3000}`)
})