import express from "express"
// import todoRouter from './routes/todos.routes'
import userRouter from './routes/user.route'
import restroRouter from './routes/restaurant.route'
// import contactRouter from './routes/contact.route'
// import reviewsRouter from './routes/review.route'
import * as errorsMiddlewares from "./middlewares/errors.middlewares";
import cors from "cors";
const PORT = 1111;
const app = express() 
app.use(express.json())
app.use(cors())
app.use('/restros', restroRouter)
app.use('/users', userRouter)
// app.use('/contacts',contactRouter)
// app.use('/reviews',reviewsRouter)

app.listen(PORT, ()=>{
    console.log('Runnig on port',PORT)
});
app.use(errorsMiddlewares.genericErrorHandler)

export default app;