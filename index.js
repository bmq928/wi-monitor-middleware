const axios = require('axios')

module.exports = (option) => (req, res, next) => {
    const start = Date.now()

    let wiMonitorUrl = 'http://localhost:3001/monitor-api/insert-data'
    if(option && option.url) wiMonitorUrl = option.url
    next()

    res.once('finish', async () => {
        try {
            const duration = Date.now() - start

            const data = {
                username: req.decoded.username,
                originalUrl: req.originalUrl,
                duration,
                ip: req.ip,
                pid: process.pid
            }
            await axios.post(wiMonitorUrl, data)
        } catch (err) {
            console.error('Error saving data to InfluxDB!')
        }
    })
}