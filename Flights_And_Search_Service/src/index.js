// Purpose of this file is booting up the server

const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
//const {Airplane} = require('./models/index');

const setupAndStartServer = async () => {
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true});
        }

        /*await Airplane.create({
            modelNumber: 'Airbus A330'
        });*/

        /*const city = await City.findOne({
            where: {
                id: 17
            }
        });
        const airports = await city.getAirports();
        /*const newAirport = await Airport.create({
            name: 'Jindal Vijaynagar Airport',
            cityId: 12
        });*/
        /*const newAirport = await Airport.findOne({
            where: {
                id: 25
            }
        });
        await city.addAirport(newAirport);
        console.log(city, airports);*/

    });
}

setupAndStartServer();