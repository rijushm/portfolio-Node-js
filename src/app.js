const express = require('express');
const requests = require('requests');
const chalk = require('chalk');
const path = require('path');
const hbs = require('hbs');

const app = express();

const port = 8000;

const staticPath = path.join(__dirname, "../public");
const tempPath = path.join(__dirname, "../templates");
const viewPath = path.join(__dirname, "../templates/views");

// console.log(viewPath);

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", viewPath);

hbs.registerPartials(tempPath);

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio');
})

app.get('/project', (req, res) => {
  res.render('portfolio');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('*', (req, res) => {
  res.render('404error');
})


// app.get("/about", (req, res) => {
//     const name  = req.query.name;
//       requests(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=9818b2268571197177d80714329e86b6`)
//       .on('data', function (chunk) {
//         const objData = JSON.parse(chunk);
//         const arrData = [objData];
//         console.log(`The temperature of ${arrData[0].name} is ${arrData[0].main.temp/10} C`);
//             // return temp;
//       })
//       .on('end', function (err) {
//         if (err) return console.log('connection closed due to errors', err);
//         res.end();
//       });
    
//       res.render("about", { 
//           name: name,
//           city: name,
//           temp: name,
//           message: 'data is set',
//       });
        
// });


app.listen(port, () =>{
    console.log(chalk.bgRed(`The server is running on http://localhost:${port}`));
})
