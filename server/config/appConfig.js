const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/',
    headers:{ 'content-type': 'application/json' },
    dbName: 'blog-post',
    domain: "riklakhe-1.auth0.com",
    audience: "YOUR_API_IDENTIFIER",
    access_token: "",
    M2Murl: 'https://riklakhe-1.auth0.com/oauth/token',
    M2Mbody: '{"client_id":"ucYhmzBs8lhFDweKJWlZfe4O821kSKF8","client_secret":"8Fz53M9pRb7cLb5kKwZJmZdO87bux2DiTmIWRfseI9w4Qw85KwjfketUEm0x3bvd","audience":"https://riklakhe-1.auth0.com/api/v2/","grant_type":"client_credentials"}',
};

export default config;