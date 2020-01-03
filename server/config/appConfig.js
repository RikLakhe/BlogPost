const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/',
    dbName: 'blog-post'
};

export default config;