const express=require('express')
const cors=require('cors')
const AuthRoute=require('../src/routes/auth')
const userRoute=require('../src/routes/user')
const postRoute=require('../src/routes/post')
const swaggerDocs=require('../src/documentation/swagger')
const multer=require('multer')
const commentRouter=require('../src/routes/comment')
const app=express()
const estaterouter=require('../src/routes/estate')
const Contactrouter=require('../src/routes/contact')
// app.use(express.static(__dirname,'../public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use('/welcome',(req,res,next)=>{
    res.send({message:'Welcome to my blog app'})
})
swaggerDocs(app);
app.use('/api/auth',AuthRoute)
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)
app.use('/api/comments',commentRouter)
app.use('/api/estates',estaterouter)
app.use('/api/contacts',Contactrouter)


module.exports=app