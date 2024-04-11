import express from 'express'
import todoRouter from './routes/todo.route'
import userRouter from './routes/user.route'
import { genericErrorHandler } from './middlewares/errors.middlewares'
import cors from 'cors'
const PORT = 3003
const app = express()
app.use(express.json())
app.use(cors())
app.use('/todos' , todoRouter)
app.use('/users', userRouter)
app.listen(PORT, () => {
    console.log('Running on port', PORT)
    app.use(genericErrorHandler)
})
export default app;



