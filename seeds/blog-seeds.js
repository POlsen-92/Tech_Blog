const { Blog } = require('../models');

const blogData = [
    {
        name:"Where Have the Bell Bottoms Gone?",
        description:"This trend disappeared with the coming of skinny jeans but will it make a resurgence?",
        created: "12/31/19",
        user_id:"1",
    },
    {
        name:"Is Rugby the Most Dangerous Sport?",
        description:"Quite possibly unless you consider the damage that dance sports due to young girls since eating disorders are the deadliest psychiatric illness",
        created: "07/15/20",
        user_id:"1",
    },
    {
        name:"Cher is Making A ComeBack with Sonny",
        description:"Since we can use CGI to bring dead actors back to life and utilize their image for a film we've decided to do the same to dead singers. Cher is now collaborating with an AI engine churning out Sonny's tunes to create a new album",
        created: "10/12/21",
        user_id:"2",
    },
    {
        name:"Why does Java Suck SO Bad?",
        description:"Considering they named the language after an already popular language in the hopes that people would accidentally use theirs instead it's obvious they weren't super confident in their ability to gain popularity on the language itself",
        created: "1/25/20",
        user_id:"2",
    },
    {
        name:"Virtual Reality Work Meetings",
        description:"Because zoom isn't good enough",
        created: "3/4/21",
        user_id:"3",
    },
    {
        name:"Lady Gaga to wear leaves to the Mets Gala",
        description:"She is trying to spread awareness about the planet. If anyone doesn't know about global warming they probably aren't going to learn from her but good try",
        created: "5/21/20",
        user_id:"4",
    },
    {
        name:"Lizzo's new album with Ed Sheeran",
        description:"It's not happening but it totally should",
        created: "8/02/21",
        user_id:"4",
    },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;