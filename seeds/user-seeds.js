const { User } = require('../models');

const seedUsers = async () => {
    const userData = await User.bulkCreate([
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
    ],{
        individualHooks:true
    });
}
 

module.exports = seedUsers;
