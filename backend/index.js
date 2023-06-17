const express = require("express")

const app = express();

app.get("/", (req, res) => {
    return res.json({hello: "world!"})
})

app.post("/run", (req, res) => {
    return res.json(req.body)
}) 

app.listen(5000, () => {
    console.log("run on port 5000!");
});