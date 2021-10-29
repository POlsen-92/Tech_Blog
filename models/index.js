const User = require("./User");
const Category = require("./Category");
const Blog = require("./Blog");
const Tag = require("./Tag");

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

Blog.hasMany(Tag, {
    foreignKey: 'tag_id'
})

Tag.belongsToMany(Blog, {
    through: BlogTag,
    foreignKey: 'tag_id',
})


module.exports={
    User,
    Category,
    Blog,
    Tag,
};
