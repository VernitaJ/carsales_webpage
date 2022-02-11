import dbConnect from '../../../utils/dbConnect'
import Car from '../../../models/Car'

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const cars = await Car.find({});
                res.status(200).json({ success: true, data: cars })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'POST':
            try {
                const car = await Car.create(req.body)
                res.status(201).json({ success: true, data: car })
            } catch (error) {
                res.status(400).json({ success: false })
            }   
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}