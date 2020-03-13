const xss = require('xss')

const CommentsService = {
    postComment(db, newComment){
        return db 
            .insert(newComment)
            .into('brand_comments')
            .returning('*')
            .then(([comment])=>comment)
    },
    updateComment(db, id, newCommentFields){
        return db('brand_comments')
            .where({id})
            .update(newCommentFields)
    },
    deleteComment(db,id){
        return db   
            .from('brand_comments')
            .where({id})
            .delete()
            .returning('*')
    },
    //returns comments based on the request id
    getByRequestId(db,request_id){
        return db   
            .from('brand_comments')
            .where('brand_comments.request_id',request_id)
            .select('*')
    },
    serializeComment(comment){
        return {
            id: comment.id,
            request_id: comment.request_id,
            user_id: comment.user_id,
            brand: xss(comment.brand),
            why: xss(comment.why)
        }
    }
}

module.exports = CommentsService