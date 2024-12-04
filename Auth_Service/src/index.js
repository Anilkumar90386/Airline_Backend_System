const express = require('express');
const app = express();

const { PORT } = require('./config/serverConfig');

const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');

// const bcrypt = require('bcrypt');
// const { User } = require('./models/index');

// const UserRepository = require('./repository/user-repository');
// const UserService = require('./services/user-service');

const db = require('./models/index');

// const { User, Role } = require('./models/index');

const prepareAndStartServer = () => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started on ${PORT}`);
        // if(process.env.DB_SYNC){
        //     db.sequelize.sync({alter: true})
        // }

        // const u1 = await User.findByPk(5);
        // const r1 = await Role.findByPk(2);
        // u1.addRole(r1);
        // const response = await u1.getRoles();
        // const response = await u1.hasRole(r1);
        // console.log(response);

        // const userService = new UserService();
        // const newToken = userService.createToken({email: 'anilkumarkasi0386@gmail.com', id:1});
        // console.log(newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhbmVzaGd1dnZhbGEyQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MDkxNzU4MTgsImV4cCI6MTcwOTE3NTgyOH0.QjVDK6nvKHPW-oXozsaCnUzFU4P3BkAC7w01aFtHnFI';
        // const response = userService.verifyToken(token);
        // console.log(response);

        // const repo = new UserRepository();
        // const response = await repo.getById(5);
        // console.log(response);

        // const password = 'hero123';
        // const user = await User.findByPk(5);
        // const response = bcrypt.compareSync(password, user.password);
        // console.log(response);
    })
}

prepareAndStartServer();
