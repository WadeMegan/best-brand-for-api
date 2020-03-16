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
            .select(
                'brand_requests.id AS id',
                'brand_requests.user_id AS user_id',
                'brand_requests.product AS product',
                'brand_requests.category AS category',
                'brand_requests.info AS info',
                'brand_requests.date AS date',
                'brand_users.first_name AS first_name',
                'brand_users.last_name AS last_name'
            )
            .join('brand_users AS users','brand_users.id','brand_requests.user_id')
            .where('brand_requests.id',id)
            .then(([request])=>request)
            //.returning('*')
    },
    //get all requests from specific category
    getByCategory(db,keyword,category){
        return db   
            .from('brand_requests')
            .where('brand_requests.brand',keyword)
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
            date: request.date
        }
    },
    serializeRequestWithUser(request){
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