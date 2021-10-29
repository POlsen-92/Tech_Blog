const { User } = require('../models');

const userData = [
    {
        username:"joe",
        password:"password",
        email:"joe@joe.joe"
    },
    {
        username:"louis",
        password:"password",
        email:"louis@joe.joe"
    },
    {
        username:"brett",
        password:"password",
        email:"brett@joe.joe"
    },
    {
        username:"michael",
        password:"password",
        email:"michael@joe.joe"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
