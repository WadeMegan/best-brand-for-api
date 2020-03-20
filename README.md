# Best Brand For API

## Use

The Best Brand For API was built for use with best-brand-for-client ([repo](https://github.com/WadeMegan/Best-Brand-For-Client)/[live app](https://best-brand-for.wademegan.now.sh/)).

## Documentation 

### Base URL

The base URL for the Best Brand For API is:
https://secure-cove-84148.herokuapp.com/api

### Authentication

There is no authentication required to utilize the Best Brand For API.

### Endpoints

#### Auth Endpoints

* POST /auth/login - Used for user login on Best Brand For client. In request body, required to pass 'email' and 'password'. Will respond with 400 status code if no user exists in drip_drop_users table. If user exists, will create and send jwt.

#### Requests Endpoints

* POST /requests - Used to add a request to the brand_requests table. In request body, required to pass 'user_id', 'product', 'category', 'info', and 'date'. Will respond with 400 status code if any of the required fields are missing. If all fields are provided, will respond with 201 status code and the added request.
* GET /requests - No required or optional request data fields. Will return a serialized list of all requests in the brand_requests table.
* GET /requests/:request_id - Required to pass request_id in the query string. Used to return the request that matches the corresponding request_id.
* PATCH /requests/:request_id - Used to update the request specified in the query string. Required to pass request_id in the query string. In request body, must pass at least one of 'user_id', 'product', 'category', 'info', or 'date'. Will respond with 400 status code if none of the fields are passed. If at least one of the fields are provided, will respond with 200 status code and will update the request's field(s) and return the updated request.
* DELETE /requests/:request_id - Used to delete a request specified in the query string. Required to pass request_id in the query string. Will respond with 200 status code and delete the request that has matching request_id.
* GET /requests/users/:user_id - Used to return requests made by a specified user. Required to pass user_id in the query string. Will return a serialized list of requests for the user whose user id was passed in the query string. 

#### Comments Endpoints

* POST /comments - Used to add a comment to the brand_comments table. In request body, required to pass 'request_id', 'user_id', 'brand', and 'why'. Will respond with 400 status code if any of the required fields are missing. If all fields are provided, will respond with 201 status code and the added comment.
* PATCH /comments/:comment_id - Used to update the comment specified in the query string. Required to pass comment_id in the query string. In request body, must pass at least one of 'request_id', 'user_id', 'brand', or 'why'. Will respond with 400 status code if none of the fields are passed. If at least one of the fields are provided, will respond with 200 status code and will update the comment's field(s) and return the updated comment.
* DELETE /comments/:comment_id - Used to delete a comment specified in the query string. Required to pass comment_id in the query string. Will respond with 200 status code and delete the comment that has matching comment_id.
* GET /comments/requests/:request_id - Used to return comments belonging to a specified request. Required to pass request_id in the query string. Will return a serialized list of comments for the request id that was passed in the query string. 

#### Users Endpoints

* POST /users - Used to add a user to the brand_users table. In request body, required to pass 'first_name', 'last_name', 'email', and 'password'. Will respond with 400 status code if any of the required fields are missing. If all fields are provided, will respond with 201 status code and the added user.

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Best Brand For Project

### Live App 

A live version of the app can be accessed [here](https://best-brand-for.wademegan.now.sh/). 

To demo Best Brand For, log in with: 
* Email: test@gmail.com
* Password: password

### Summary 

Best Brand For is a web application that allows users to make requests for products they are looking to purchase. Other users can then comment on the request to recommend their favorite brands for that product. For example, if a user is looking to buy a pair of running shoes, they can make a request for "Running Shoes" and other users might comment "Nike", "Adidas", etc. The goal of Best Brand For is to make it easy for users to make better buying decisions with the help of other users' experience.

### Technologies Used

#### Front End: 
* ReactJS
* jQuery
* HTML
* CSS

#### Back End: 
* Node.js
* Express
* PostgreSQL

#### APIs:
* Best Brand For API