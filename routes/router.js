



const router = require("express").Router();
const fs = require("fs");

router.get("/", (req,res)=> {
    const upload = fs.readFileSync("src/index.html");
    res.send(`${upload}`)
    res.end()
})

module.exports = router;