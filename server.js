const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());


const menuItem = require("./models/MenuItem");

app.get("/", function (req, res) {
  res.send("welcome to my hotels");
});




// newPerson.name=data.name;
// newPerson.age=data.age;
// newPerson.work=data.work;
// newPerson.mobile=data.mobile;
// newPerson.salary=data.salary;


const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes)
app.use('/person',personRoutes);


app.listen(3000, () => {
  console.log("listening on port 3000");
});
