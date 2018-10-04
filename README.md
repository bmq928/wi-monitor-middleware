# wi-monitor-middleware

# install
npm install --save wi-monitor-middleware

#how to
  const wiMonitorMiddleware = require('wi-monitor-middleware')
  
 // default url : htpp://localhost:3001/monitor-api/insert-data
 app.use(wiMonitorMiddleware({url : 'wiMonitorServerUrl + /monitor-api/insert-data'}))
