import dbConnect from '../../../utils/dbConnect'
import Car from '../../../models/Car'

dbConnect();

export default async (req, res) => {
    const { 
        query: { id },
        method
    } = req;
    
    switch(method) {
        case 'GET':
            try {
                const car = await Car.findById(id)
                if (!car) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: car })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case "PUT":
            try {
                const car = await Car.findByIdAndUpdate(id, req.body, { 
                    new: true, 
                    runValidators: true
                })
                if (!car) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: car })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case "DELETE":
            try {
                const deletedCar = await Car.deleteOne({ _id: id});
                if (!deletedCar) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {}})
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}