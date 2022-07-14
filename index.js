const fs = require("fs");
const http = require("http");
const PORT = process.env.PORT || 8000;
const time = Date().toString();

//Using Express
const express = require("express");
const app = express();
app.use(express.json());
app.get("/", function (req, res) {
  fs.readFile("Date/date.txt", "UTF8", function (err, dt) {
    if (err) throw err;
    else {
      res.json([
        {
          currentTime: dt,
        },
      ]);
    }
  });
});
app.post("/", function (req, res) {
  let data = req.body.time.toString();
  fs.writeFile("Date/date.txt", data, (err) => {
    if (err) throw err;
    let arr = [
      {
        message: "Data saved Successfully",
        savedData: data,
      },
    ];
    res.json(arr);
  });
});
app.listen(PORT, () => {
  console.log("Listening to " + PORT);
});
