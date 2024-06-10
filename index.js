//create server
const json_server=require('json-server')
const BookServer=json_server.create()

//cors
const cors=require('cors')
BookServer.use(cors())

//middleware
const middleware=json_server.defaults()
BookServer.use(middleware)

//router
const router=json_server.router('db.json')
BookServer.use(router)

//port
const PORT=9000
BookServer.listen(PORT,()=>{console.log(`___server created at port ${PORT}____`);})