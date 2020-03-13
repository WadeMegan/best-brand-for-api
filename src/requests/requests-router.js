const express = require('express')
const RequestsService = require('./requests-service')

const requestsRouter = express.Router()
const jsonBodyParser = express.json()

requestsRouter
    .route('/')
    //post a new request
    .post(jsonBodyParser,(req,res,next)=>{
        const { user_id, product, category, info, date } = req.body
        const newRequest = { user_id, product, category, info, date }

        for (const field of ['user_id','product','category','info','date'])
            if(!req.body[field])
                return res.status(400).json({
                    error: `Missing '${field}' in request body` 
                })

        return RequestsService.postRequest(
            req.app.get('db'),
            newRequest
        )
            .then(request=>{
                res
                    .status(201)
                    .json(RequestsService.serializeRequest(request))
            })
            .catch(next)
    })
    .get((req,res,next)=>{
        RequestsService.getAll(
            req.app.get('db')
        )
        .then(requests=>{
            res.json(requests.map(RequestsService.serializeRequest))
        })
        .catch(next)
    })

requestsRouter
    .route('/:request_id')
    //get specific request by its id
    .get((req,res,next)=>{
        RequestsService.getById(
            req.app.get('db'),
            req.params.request_id
        )
            .then(request=>{
                res.json(RequestsService.serializeRequest(request))
            })
            .catch(next)
    })
    .patch(jsonBodyParser,(req,res,next)=>{
        const { user_id, product, category, info, date } = req.body
        const requestToUpdate = { user_id, product, category, info, date }

        const numberOfValues = Object.values(requestToUpdate).filter(Boolean).length
        if(numberOfValues === 0)
            return res.status(400).json({
                error:{
                    message: `Request body must contain either 'user_id', 'product','category','info', or 'date'`
                }
            })

        RequestsService.updateRequest(
            req.app.get('db'),
            req.params.request_id,
            requestToUpdate
        )
            .then(numRowsAffected=>{
                res.status(204).end()
            })
            .catch(next)
    })
    .delete((req,res,next)=>{
        RequestsService.deleteRequest(
            req.app.get('db'),
            req.params.request_id
        )
            .then(request=>{
                res 
                    .status(204)
                    .json()
            })
            .catch(next)
    })

requestsRouter
    .route('/category/:category')
    //get all requests that are within a certain category
    .get((req,res,next)=>{
        RequestsService.getByCategory(
            req.app.get('db'),
            req.params.category
        )
            .then(requests=>{
                res.json(requests.map(RequestsService.serializeRequest))
            })
            .catch(next)
    })


module.exports = requestsRouter