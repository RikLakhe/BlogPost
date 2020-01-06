const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/',
    dbName: 'blog-post',
    domain: "riklakhe-1.auth0.com",
    audience: "YOUR_API_IDENTIFIER",
    access_token: "",
};

export default config;