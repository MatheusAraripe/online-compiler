const express = require("express")

const {generateFille} = require("./generateFile");

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

    const filepath = await generateFille(language, code)

    return res.json({filepath})
}) 

app.listen(5000, () => {
    console.log("go to: ", "http://localhost:5000/");
});