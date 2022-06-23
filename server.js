const express = require("express")

const app = express()

app.use(express.json())

app.post("/api-upload", (req, res) => {
    console.log("Spec:", JSON.parse(req.body.spec))
    console.log("ApiKey:", req.body.apiKey)
    res.sendStatus(200)
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})