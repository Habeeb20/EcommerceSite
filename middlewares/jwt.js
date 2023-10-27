const {expressjwt: jwt} = require('express-jwt');

function authJwt() {
    const secret = process.env.JWT_SECRET;
   
    return jwt({
        secret:"test",
        algorithms: ['HS256'],
        isRevoked: isRevoked,
    }).unless({
        path: [
            { url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS'] },
            `/users/login`,
            `/users/register`,
        ],
    })
}



async function isRevoked(req, token) {
    if (!token.payload.isAdmin) {
        return true
    }
}


module.exports = authJwt;