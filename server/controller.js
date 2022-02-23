const comments = require('./db.json')
globalId = 4;

module.exports = {
    getComments: (req, res) => res.status(200).send(comments),

    createComment: (req, res) => {
        let { name, comment } = req.body;

        let newComment = {
            id: globalId, 
            name: name, 
            comment: comment, 
        };
        comments.push(newComment);
        res.status(200).send(comments);
        globalId++;
    }
}