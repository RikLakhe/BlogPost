const jwt = require('jsonwebtoken');

export const createNewToken = (user, key) => {
    console.log('thekey:', key);
    return jwt.sign(
        {
            sub: user.id,
            userName: user.username,
            role: user.role,
        },
        key,
        {
            expiresIn: '1 min',
        }
    );
};

export const isTokenExpired = (Token, key) => {
    try {
        const decoded = decodeToken(Token, key);
        return decoded.exp < Date.now() / 1000;
    } catch (e) {
        return false;
    }
};

const decodeToken = (Token, key) => {
    return jwt.decode(Token, key);
};