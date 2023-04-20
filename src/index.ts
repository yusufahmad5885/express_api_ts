import express, {Request, Response} from 'express'
const app = express()

app.get('/', (req: Request,res: Response): void => {
    const age: number = 49;
    res.json({message: 'say hello'})
})

app.listen('3001', () : void=> {
    console.log('server running')
})