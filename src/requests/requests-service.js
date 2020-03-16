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
            .from('brand_requests AS req')
            .select(
                'req.id AS id',
                'req.user_id AS user_id',
                'req.product AS product',
                'req.category AS category',
                'req.info AS info',
                'req.date AS date',
                'users.first_name AS first_name',
                'users.last_name AS last_name'
            )
            .join('brand_users AS users','users.id','req.user_id')
            .where('brand_requests.id',id)
            //.then(([request])=>request)
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
            .returning('*')
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
            .orderBy('id','desc')
    },
    serializeRequest(request){
        return {
            id: request.id,
            user_id: request.user_id,
            product: xss(request.product),
            category: request.category,
            info: xss(request.info),
            date: request.date,
            first_name: request.first_name,
            last_name: request.last_name
        }
    }
}

module.exports = RequestsService