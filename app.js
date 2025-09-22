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



app.get('/deathCertificate/AFSANAKHATUNKOTWA', (req, res) => {
   res.render("21");
});
app.get('/deathCertificate/SABILAKHATUNKOTWA', (req, res) => {
   res.render("22");
});
app.get('/deathCertificate/SONADEVIKOTWA', (req, res) => {
   res.render("23");
});
app.get('/deathCertificate/SIYADEVIHARSIDHI', (req, res) => {
   res.render("24");
});
app.get('/deathCertificate/RAMAWATIKUMARIHARSIDHI', (req, res) => {
   res.render("25");
});
app.get('/deathCertificate/BABITADEVIHARSIDHI', (req, res) => {
   res.render("26");
});
app.get('/deathCertificate/REKHADEVIKOTWA', (req, res) => {
   res.render("27");
});
app.get('/deathCertificate/SHARDADEVILAKHAURA', (req, res) => {
   res.render("28");
});
app.get('/deathCertificate/ANITADEVIKALYANPUR', (req, res) => {
   res.render("29");
});
app.get('/deathCertificate/ANITADEVIKALYANPOUREC', (req, res) => {
   res.render("30");
});


app.get('/deathCertificate/GITADEVIJAGDISHPUR', (req, res) => {
   res.render("31");
});
app.get('/deathCertificate/PUNAMDEVIJAGDISHPUR', (req, res) => {
   res.render("32");
});
app.get('/deathCertificate/CHANDADEVIJAGDISHPUR', (req, res) => {
   res.render("33");
});
app.get('/deathCertificate/GEETADEVIJAGDISHPUR', (req, res) => {
   res.render("34");
});
app.get('/deathCertificate/ARSWATIDEVIJAGDISHPUR', (req, res) => {
   res.render("35");
});


app.get('/deathCertificate/KAUSHLYAKUMARIJAGDISHPUR', (req, res) => {
   res.render("36");
});app.get('/deathCertificate/RUMALIDEVIJAGDISHPUR', (req, res) => {
   res.render("37");
});app.get('/deathCertificate/PARWATIDEVIJOGAPATI', (req, res) => {
   res.render("38");
});app.get('/deathCertificate/PRATIMADEVIJOGAPATTI', (req, res) => {
   res.render("39");
});app.get('/deathCertificate/URMILADEVIJOGAPATTI', (req, res) => {
   res.render("40");
});app.get('/deathCertificate/RINKUDEVIJOGAPPATI', (req, res) => {
   res.render("41");
});app.get('/deathCertificate/LAXMIDEVIJOGAPATTI', (req, res) => {
   res.render("42");
});app.get('/deathCertificate/CHAINIDEVIJOGAPATTI', (req, res) => {
   res.render("43");
});app.get('/deathCertificate/ASHADEVIJOGAPATTI', (req, res) => {
   res.render("44");
});app.get('/deathCertificate/PRAMILADEVIJOGAPATTI', (req, res) => {
   res.render("45");
});
app.get('/deathCertificate/SAYRAKHATUNJOGAPATTI', (req, res) => {
   res.render("46");
});
app.get('/deathCertificate/REHANAKHATUNJOGAPATTI', (req, res) => {
   res.render("47");
});
app.get('/deathCertificate/LALMUNIDEVIJOGAPATTI', (req, res) => {
   res.render("48");
});
app.get('/deathCertificate/RITADEVIJOGAPATTI', (req, res) => {
   res.render("49");
});
app.get('/deathCertificate/MADHUDEVIJOGAPATTI', (req, res) => {
   res.render("50");
});

app.get('/deathCertificate/GWALADEVIJOGAPATTI', (req, res) => {
   res.render("51");
});
app.get('/deathCertificate/RANIDEVIJOGAPATTI', (req, res) => {
   res.render("52");
});
app.get('/deathCertificate/BINDADEVIJOGAPATTI', (req, res) => {
   res.render("53");
});
app.get('/deathCertificate/RENUDEVIJOGAPATTI', (req, res) => {
   res.render("54");
});
app.get('/deathCertificate/RANJITADEVIJOGAPATTI', (req, res) => {
   res.render("55");
});
app.get('/deathCertificate/CHAMPADEVIJOGAPATTI', (req, res) => {
   res.render("56");
});
app.get('/deathCertificate/AMRITADEVIJOGAPATTI', (req, res) => {
   res.render("57");
});
app.get('/deathCertificate/JAGRANIDEVIJOGAPATTI', (req, res) => {
   res.render("58");
});
app.get('/deathCertificate/MAINADEVIJOGAPATTI', (req, res) => {
   res.render("59");
});
app.get('/deathCertificate/PREMSHILADEVIJOGAPATTI', (req, res) => {
   res.render("60");
});
app.get('/deathCertificate/RINKUDEVIJOGAPATTI', (req, res) => {
   res.render("61");
});
app.get('/deathCertificate/GENADEVIJOGAPATTI', (req, res) => {
   res.render("62");
});
app.get('/deathCertificate/AFSANAKHATUNJOGAPATTI', (req, res) => {
   res.render("63");
});
app.get('/deathCertificate/PRABHAWATIDEVIJOGAPATTI', (req, res) => {
   res.render("64");
});
app.get('/deathCertificate/SANGEETADEVIJOGAPATTI', (req, res) => {
   res.render("65");
});
app.get('/deathCertificate/USHAKUMARIJOGAPATTI', (req, res) => {
   res.render("66");
});
app.get('/deathCertificate/RUNADEVIJOGAPATTI', (req, res) => {
   res.render("67");
});
app.get('/deathCertificate/NIRMALADEVIJOGAPATTI', (req, res) => {
   res.render("68");
});
app.get('/deathCertificate/DURGAVATIDEVIYOGAPATTI', (req, res) => {
   res.render("69");
});
app.get('/deathCertificate/PANMATIDEVILAURIYA', (req, res) => {
   res.render("70");
});
app.get('/deathCertificate/FULPATIDEVILAURIYA', (req, res) => {
   res.render("71");
});
app.get('/deathCertificate/MUNIDEVILAURIYA', (req, res) => {
   res.render("72");
});
app.get('/deathCertificate/GYANTIDEVILAURIYA', (req, res) => {
   res.render("73");
});
app.get('/deathCertificate/INDUDEVILAURIYA', (req, res) => {
   res.render("74");
});
app.get('/deathCertificate/ANTIMALAURIYA', (req, res) => {
   res.render("75");
});
app.get('/deathCertificate/SANJUDEVILAURIYA', (req, res) => {
   res.render("76");
});
app.get('/deathCertificate/YASODADEVILAURIYA', (req, res) => {
   res.render("77");
});
app.get('/deathCertificate/AMRITAKUMARILAURIYA', (req, res) => {
   res.render("78");
});
app.get('/deathCertificate/AANARAMADEVILAURIYA', (req, res) => {
   res.render("79");
});
app.get('/deathCertificate/SAROJDEVILAURIYA', (req, res) => {
   res.render("80");
});
app.get('/deathCertificate/PUNAMDEVILAURIYA', (req, res) => {
   res.render("81");
});
app.get('/deathCertificate/ANITADEBILAURIYA', (req, res) => {
   res.render("82");
});
app.get('/deathCertificate/JAYDAKHATUNLAURIYA', (req, res) => {
   res.render("83");
});
app.get('/deathCertificate/RUTANDEVILAURIYA', (req, res) => {
   res.render("84");
});
app.get('/deathCertificate/BEBIDEVILAURIYA', (req, res) => {
   res.render("85");
});
app.get('/deathCertificate/GYANTIDEVILAURIYA', (req, res) => {
   res.render("86");
});
app.get('/deathCertificate/KUNTIDEVILAURIYA', (req, res) => {
   res.render("87");
});
app.get('/deathCertificate/NIDHIKUMARLAURIYA', (req, res) => {
   res.render("88");
});
app.get('/deathCertificate/SIMADEVILAURIYA', (req, res) => {
   res.render("89");
});
app.get('/deathCertificate/SUNITADEVILAURIYA', (req, res) => {
   res.render("90");
});
app.get('/deathCertificate/SANTIDEVILURIYA', (req, res) => {
   res.render("91");
});
app.get('/deathCertificate/KRISHNAWATIDEVILAURIYA', (req, res) => {
   res.render("92");
});
app.get('/deathCertificate/LALITADEVILAURIYA', (req, res) => {
   res.render("93");
});
app.get('/deathCertificate/NAGINAKHATOONLAURIYA', (req, res) => {
   res.render("94");
});
app.get('/deathCertificate/KIRANDEVIKUAHI', (req, res) => {
   res.render("95");
});
app.get('/deathCertificate/RUNNIDEVIKUAHI', (req, res) => {
   res.render("96");
});
app.get('/deathCertificate/MARANIDEVIKUAHI', (req, res) => {
   res.render("97");
});
app.get('/deathCertificate/AKUNTIDEVIKUAHI', (req, res) => {
   res.render("98");
});
app.get('/deathCertificate/RITADEVIKUAHII', (req, res) => {
   res.render("99");
});
app.get('/deathCertificate/MALADEVIKUAHI', (req, res) => {
   res.render("100");
});
app.get('/deathCertificate/GITADEVIKUAHI', (req, res) => {
   res.render("101");
});
app.get('/deathCertificate/ANURADHADEVIKUAHI', (req, res) => {
   res.render("103");
});
app.get('/deathCertificate/SHILADEVILAURIYA', (req, res) => {
   res.render("104");
});
app.get('/deathCertificate/INDUKUMARIKUAHI', (req, res) => {
   res.render("105");
});



app.get('/deathCertificate/NIRMALADEVILAURIYA', (req, res) => {
   res.render("106");
});
app.get('/deathCertificate/SIKILDEVIKUAHI', (req, res) => {
   res.render("107");
});
app.get('/deathCertificate/KABUTARIDEVIKUAHI', (req, res) => {
   res.render("108");
});
app.get('/deathCertificate/SHOBHASINGHKUAHI', (req, res) => {
   res.render("109");
});
app.get('/deathCertificate/MINADEVIKUAHI', (req, res) => {
   res.render("110");
});

// Start the server
app.listen(port, () => {
  console.log(`${port}`);
});