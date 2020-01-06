import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

import config from '../config/appConfig';

// Define middleware that validates incoming bearer tokens
// using JWKS from riklakhe-1.auth0.com
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${config.domain}/.well-known/jwks.json`
    }),

    audience: config.audience,
    issuer: `https://${config.domain}/`,
    algorithm: ["RS256"]
});

export default checkJwt