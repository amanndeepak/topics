const express = require("express");
const { urlencoded } = require("body-parser");
const app = express();
const port = 3000;
app.use(express.json());
const { save } = require("./nodemailer");


app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/", (req, res) => {
  save(req.body);
  console.log("data is ", req.body);
  res.sendFile(`${__dirname}/index.html`);
}),


  app.get("/", (req, res) => {
    save(req.body);
    console.log("data is ", req.body);
    res.sendFile(`${__dirname}/index.html`);
  
  }),
  app.post("/", urlencoded, (request, response) => {
    console.log("got body", request.body);
    response.sendStatus(200);
  });



app.listen(port, () => {
  console.log(`post is running at ${port}`);
});
