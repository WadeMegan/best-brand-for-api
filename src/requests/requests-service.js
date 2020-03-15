const xss = require('xss')

const RequestsService={
    postRequest(db, newRequest){
        return db      
            .insert(newRequest)
            .into('brand_requests')
            .returning('*')
            .then(([request])=>request)
    },
    getAll(db){
        return db   
            .from('brand_requests')
            .select('*')
            .orderBy('id','desc')
    },
    //get request by id
    getById(db, id){
        return db   
            .from('brand_requests')
            .where({id})
            .select('*')
            .then(([request])=>request)
    },
    //get all requests from specific category
    getByCategory(db,category){
        return db   
            .from('brand_requests')
            .where('brand_requests.category',category)
            .select('*')
    },
    updateRequest(db, id, newRequestFields){
        return db('brand_requests')
            .where({id})
            .update(newRequestFields)
    },
    deleteRequest(db,id){
        return db   
            .from('brand_requests')
            .where({id})
            .delete()
            .returning('*')
    },
    //get request by user id
    getByUserId(db, user_id){
        return db   
            .from('brand_requests')
            .where('brand_requests.user_id',user_id)
            .select('*')
    },
    serializeRequest(request){
        return {
            id: request.id,
            user_id: request.user_id,
            product: xss(request.product),
            category: request.category,
            info: xss(request.info),
            date: request.date
        }
    }
}

module.exports = RequestsService