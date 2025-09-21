require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine (assuming EJS for this example)
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));  

// Sample route
app.get('/', (req, res) => {
   res.render("deathCertificate");
});
app.get('/a', (req, res) => {
   res.render("1");
});

app.get('/deathCertificate/urmila', (req, res) => {
   res.render("2");
});
app.get('/deathCertificate/anshudevilakhaura', (req, res) => {
   res.render("3");
});
app.get('/deathCertificate/miradevilakhaura', (req, res) => {
   res.render("4");
});
app.get('/deathCertificate/reetadeviharsidhi', (req, res) => {
   res.render("5");
});
app.get('/deathCertificate/CHAMPADEVIKOTWA', (req, res) => {
   res.render("6");
});
app.get('/deathCertificate/GEETADEVIHARSIDHI', (req, res) => {
   res.render("7");
});
app.get('/deathCertificate/MANJUDEVIHARSIDHI', (req, res) => {
   res.render("8");
});
app.get('/deathCertificate/NIKUKUMARIKOTWA', (req, res) => {
   res.render("9");
});
app.get('/deathCertificate/CHINTUDEVIHARSIDHI', (req, res) => {
   res.render("10");
});


app.get('/deathCertificate/CHINTUDEVIHARSIDHI', (req, res) => {
   res.render("11");
});


app.get('/deathCertificate/SUNITADEVIKOTWA', (req, res) => {
   res.render("12");
});
app.get('/deathCertificate/SHANTIDEVIKALYANPUR', (req, res) => {
   res.render("13");
});
app.get('/deathCertificate/ANUDEVIKALYANPUR', (req, res) => {
   res.render("14");
});
app.get('/deathCertificate/SARITADEVIKALYANPUR', (req, res) => {
   res.render("15");
});
app.get('/deathCertificate/CHHAYAKUMARIJAGDISHPUR', (req, res) => {
   res.render("16");
});
app.get('/deathCertificate/RAMBHADEVIJAGDISHPUR', (req, res) => {
   res.render("17");
});
app.get('/deathCertificate/GAYTREEDEVIKOTWA', (req, res) => {
   res.render("18");
});


app.get('/deathCertificate/KAMRUNKHATUNKOTWA', (req, res) => {
   res.render("19");
});
app.get('/deathCertificate/ASAMAKHATUNKOTWA', (req, res) => {
   res.render("20");
});


// Start the server
app.listen(port, () => {
  console.log(`${port}`);
});