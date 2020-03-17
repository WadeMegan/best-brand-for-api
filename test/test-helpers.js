const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray(){
    return [
        {
            id: 1,
            first_name: 'test-user-1',
            last_name: 'Test user 1',
            email: 'test@gmail.com',
            password: 'password'
        },
        {
            id: 2,
            first_name: 'test-user-2',
            last_name: 'Test user 2',
            email: 'test@gmail.com',
            password: 'password'
        },
        {
            id: 3,
            first_name: 'test-user-3',
            last_name: 'Test user 3',
            email: 'test@gmail.com',
            password: 'password'
        },
        {
            id: 4,
            first_name: 'test-user-4',
            last_name: 'Test user 4',
            email: 'test@gmail.com',
            password: 'password'
        },
    ]
}

function makeRequestsArray(){
    return [
        {
            id: 1,
            user_id: 1, 
            product: 'Running Shoes',
            category: 'Clothing & Shoes',
            info: 'I have bad knees so must have lots of cushioning.',
            date: '2020-02-02T00:00:00.000Z'
        },
        {
            id: 2,
            user_id: 2, 
            product: 'Car',
            category: 'Transportation',
            info: 'Must seat at least 8!',
            date: '2020-02-02T00:00:00.000Z'
        },
        {
            id: 3,
            user_id: 2, 
            product: 'Diapers',
            category: 'Baby & Kid',
            info: 'Soft material please.',
            date: '2020-02-02T00:00:00.000Z'
        },
        {
            id: 4,
            user_id: 4, 
            product: 'Smart phone',
            category: 'Technology',
            info: 'I am a social media influencer, so I need it to have a great camera.',
            date: '2020-02-02T00:00:00.000Z'
        },
    ]
}

function makeCommentsArray(){
    return [
        {
            id: 1,
            request_id: 1,
            user_id: 1, 
            brand: 'Nike',
            why: 'They look so cool.'
        },
        {
            id: 2,
            request_id: 2,
            user_id: 4, 
            brand: 'Toyota',
            why: 'The sienna is a great minivan.'
        },
        {
            id: 3,
            request_id: 1,
            user_id: 2, 
            brand: 'Huggies',
            why: 'My baby loves them.'
        },
        {
            id: 4,
            request_id: 1,
            user_id: 1, 
            brand: 'iPhone',
            why: 'All the new iphones have great cameras.'
        },
    ]
}

function cleanTables(db) {
    return db.transaction(trx =>
      trx.raw(
        `TRUNCATE
            brand_comments,
            brand_requests,
            brand_users
        `
      )
      .then(() =>
        Promise.all([
          trx.raw(`ALTER SEQUENCE brand_comments_id_seq minvalue 0 START WITH 1`),
          trx.raw(`ALTER SEQUENCE brand_requests_id_seq minvalue 0 START WITH 1`),
          trx.raw(`ALTER SEQUENCE brand_users_id_seq minvalue 0 START WITH 1`),
          trx.raw(`SELECT setval('brand_comments_id_seq', 0)`),
          trx.raw(`SELECT setval('brand_requests_id_seq', 0)`),
          trx.raw(`SELECT setval('brand_users_id_seq', 0)`),
        ])
      )
    )
}

function seedUsers(db, users) {
    const preppedUsers = users.map(user => ({
      ...user,
      password: bcrypt.hashSync(user.password, 1)
    }))
    return db.into('brand_users').insert(preppedUsers)
      .then(() =>
        // update the auto sequence to stay in sync
        db.raw(
          `SELECT setval('brand_users_id_seq', ?)`,
          [users[users.length - 1].id],
        )
      )
}

module.exports = {
    makeUsersArray,
    makeRequestsArray,
    makeCommentsArray,
    cleanTables,
    seedUsers
}