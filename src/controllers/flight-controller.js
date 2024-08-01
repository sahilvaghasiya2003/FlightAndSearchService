const {Flightservice} = require('../services/index')

const flightservice = new Flightservice();

const create = async(req,res)=>{
    try {
        const flight = await flightservice.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},                                   
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}

const getAll= async(req,res)=>{
    try {
        const response = await flightservice.getAllFlightData(req.query);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully fetch the flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},                                   
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        });
    }
}

module.exports = {create,getAll}