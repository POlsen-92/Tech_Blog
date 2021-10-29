const User = require("./User");
const Category = require("./Category");
const Blog = require("./Blog");

User.hasMany(Blog, {
    foreignKey: 'user_id',
})

Blog.belongsTo(User, {
    foreignKey: 'user_id',
})

Category.hasMany(Blog, {
    foreignKey: 'category_id',
    onDelete: "CASCADE"
})

Blog.belongsTo(Category, {
    foreignKey: 'category_id',
})



module.exports={
    User,
    Category,
    Blog
};
