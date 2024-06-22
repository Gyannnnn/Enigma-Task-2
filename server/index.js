const express = require('express');
const cors = require('cors');
const pdf = require('html-pdf');
const path = require('path');
const pdfTemplate = require('./pdf-sample/index');

const app = express();
const port = 4000;

const allowedOrigins = ["http://localhost:5173", "https://resume-builder-app-liard.vercel.app", "https://resumebuilderbygyana.vercel.app"];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin - like mobile apps, curl, etc
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["POST", "GET", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/create-pdf", (req, res) => {
  try {
    const htmlContent = pdfTemplate(req.body);
    console.log('Request Body:', req.body);
    console.log('Generated HTML:', htmlContent);

    pdf.create(htmlContent, {}).toFile("My_resume.pdf", (err) => {
      if (err) {
        console.error("Error generating PDF:", err);
        return res.status(500).send('Error generating PDF');
      } else {
        console.log("PDF Created Successfully");
        return res.status(200).send('PDF Created Successfully');
      }
    });
  } catch (error) {
    console.error("Exception in creating PDF:", error);
    res.status(500).send('Exception in creating PDF');
  }
});

app.get("/fetch-pdf", (req, res) => {
  const filePath = path.join(__dirname, 'My_resume.pdf');
  res.download(filePath, 'My_resume.pdf', (err) => {
    if (err) {
      console.error("Error downloading PDF:", err);
      res.status(500).send('Error downloading PDF');
    }
  });
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
