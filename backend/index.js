const express = require("express")

const {generateFille} = require("./generateFile");
const {executeCpp} = require("./executeCpp");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get("/", (req, res) => {
    return res.json({hello: "world!"})
})

app.post("/run", async (req, res) => {
    const {language = "cpp", code} = req.body;

    if (code === undefined){
        return res.status(400).json({success: false, error: "emptyt code!"});
    }

    try{
        const filepath = await generateFille(language, code)

        const output = await executeCpp(filepath);
    
        return res.json({filepath, output})
    } catch (err) {
        res.status(500).json({err})
    }


}) 

app.listen(5000, () => {
    console.log("go to: ", "http://localhost:5000/");
});