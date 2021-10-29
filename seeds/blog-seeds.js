const { User } = require('../models');

const userData = [
    {
        name:"",
        description:"",
        user_id:"",
        category_id:""
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;