// import dbConnect from "../../../utils/dbConnect";
// import Car from "../../../models/Car";
// var fs = require('fs');
// var path = require('path');

// dbConnect();

var multer = require('multer');
var upload = multer({ dest: "uploads/" });
const express = require('express')
const app = express()
  

app.use(express.json());

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
  

app.post('/api/cars', upload.single('car'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.dir( req.body)
    console.log(req.file)
    // try {
    //     const car = {
    //       brand: req.body.brand,
    //       model: req.body.model,
    //       year: req.body.year,
    //       colour: req.body.colour,
    //       price: req.body.price,
    //       img: {
    //         data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file)),
    //         contentType: 'image/png'
    //       },
    //     };
    //     await Car.create(car);
    //     res.status(201).json({ success: true, data: car });
    //     res.redirect('/');
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //     console.log(error);
    //   }
})


app.get('/cars', function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.dir(req.body)
    console.log(req.file)
    // try {
    //     const car = {
    //       brand: req.body.brand,
    //       model: req.body.model,
    //       year: req.body.year,
    //       colour: req.body.colour,
    //       price: req.body.price,
    //       img: {
    //         data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file)),
    //         contentType: 'image/png'
    //       },
    //     };
    //     await Car.create(car);
    //     res.status(201).json({ success: true, data: car });
    //     res.redirect('/');
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //     console.log(error);
    //   }
})

app.listen(3001, () => {
	console.log(`Server started...`);
});

// export default async (req, res) => {
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const cars = await Car.find({});
//         res.status(200).json({ success: true, data: cars });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case "POST":
//         const image = await new Promise(function (resolve, reject) {
//             const form = new formidable.IncomingForm({ keepExtensions: true });
//             form.parse(req, function (err, fields, files) {
//               if (err) return reject(err);
//               resolve({ fields, files });
//             });
//           });
            
//           export const config = {
//             api: {
//               bodyParser: false,
//             },
//           };
//       try {
//         const car = {
//           brand: req.body.brand,
//           model: req.body.model,
//           year: req.body.year,
//           colour: req.body.colour,
//           price: req.body.price,
//           img: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file)),
//             contentType: 'image/png'
//           },
//         };
//         await Car.create(car);
//         res.status(201).json({ success: true, data: car });
//         res.redirect('/');
//       } catch (error) {
//         res.status(400).json({ success: false });
//         console.log(error);
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// };
