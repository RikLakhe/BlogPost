export const httpRequired = () => {
    const error = {};
    return (req, res, next) => {
        if (req.headers['content-type'] !== 'application/json') {
            error.msg = 'Server requires application/json'
        } else {
            next()
        }
    }
}

