const express = require('express');
const cors = require('cors');
const pdf = require('html-pdf');
const path = require('path');
const app = express();
const port = 4000;
const pdfSample = require('./pdf-sample/index'); // Ensure this module returns a valid HTML string

app.use(cors({
    origin: ["https://resumebuilderbygyana.vercel.app"],
    methods: ["POST", "GET", "DELETE"], 
    credentials: true 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/create-pdf", (req, res) => {
    pdf.create(pdfSample(req.body), {}).toFile("My_resume.pdf", (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error generating PDF');
        } else {
            console.log("Created Successfully");
            return res.status(200).send('PDF Created Successfully');
        }
    });
});

app.get("/fetch-pdf", (req, res) => {
    const filePath = path.join(__dirname, 'My_resume.pdf');
    res.download(filePath, 'My_resume.pdf', (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error downloading PDF');
        }
    });
});

app.use(express.static("../client/build"));

app.listen(port, () => {
    console.log(`Server Is Running At ${port}`);
});
