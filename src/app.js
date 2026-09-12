const express = require("express")
const info = require("./Schema/Schema")

const app = express()
app.use(express.json())

//CREATE api____________________
app.post("/create", async (req,res) => {
    const Data = req.body;
    const Info = await info.create({
    stdName: Data.stdName,
    id: Data.id,
    roll: Data.roll,
    dept: Data.dept
    })
    return res.status(201).json({
        message: "Data added",
        Info
    });
});

//READ api___________________
app.get("/read", async(req, res) => {
    const data = await info.find();
    res.status(200).json({
        Message: "Dara fetched",
        data
    });
});


//UPDATE api_______________
app.put("/update/:idx", async (req,res) => {
    const idx = req.params.idx;
    const updatedData = await info.findByIdAndUpdate(idx);

    updatedData.stdName = req.body.stdName;
    updatedData.id = req.body.id;
    updatedData.roll = req.body.roll;
    updatedData.dept = req.body.dept;

    const newData = await updatedData.save();

    res.status(200).json({
        message: "data updation successful"
    });
});


app.delete("/delete/:idx", async (req,res) => {
    const idx = req.params.idx;
    await info.findByIdAndDelete(idx);

    res.status(200).json({
        Message: "entry deleted"
    });
});

module.exports = app