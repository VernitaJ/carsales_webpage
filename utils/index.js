import dbConnect from "../../../utils/dbConnect";
import Car from "../../../models/Car";
// var fs = require('fs');
var path = require('path');

dbConnect();

var multer = require('multer');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const cars = await Car.find({});
        res.status(200).json({ success: true, data: cars });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
          console.log(req)
        const car = {
          brand: req.body.brand,
          model: req.body.model,
          year: req.body.year,
          colour: req.body.colour,
          price: req.body.price,
          img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file)),
            contentType: 'image/png'
          },
        };
        await Car.create(car);
        res.status(201).json({ success: true, data: car });
        res.redirect('/');
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
