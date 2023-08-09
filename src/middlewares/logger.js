export const logger = (req, res, next) => {
    console.log('Method: '+ req.method + ' - URL: ' + req.originalUrl)
    console.log(req.ip)
    next()
}

export default logger