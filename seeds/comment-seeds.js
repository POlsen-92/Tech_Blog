const { Comment } = require('../models');

const commentData = [
    {
        name:"joe",
        description:"Could be Better",
        blog_id:"1",
    },
    {
        name:"katherine",
        description:"Loved it So Much!",
        blog_id:"2",
    },
    {
        name:"blake",
        description:"Wow So inspirational",
        blog_id:"3",
    },
    {
        name:"kyle",
        description:"This is the top knotch journalism the world needs",
        blog_id:"4",
    },
    {
        name:"rude person",
        description:"What garbage",
        blog_id:"5",
    },
    {
        name:"sara",
        description:"Can't imagine a better ending",
        blog_id:"6",
    },
    {
        name:"tobias",
        description:"Woohoo",
        blog_id:"7",
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;