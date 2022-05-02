import bodyParser from "body-parser";
import express  from "express";
import db from './config/db.js';
import anotacoesRouter from './routes/anotacoesRouter.js'

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

try {
    db.authenticate().then(()=>{
        console.log('Banco de Dados Conectado.');
    });
    
} catch (error) {
    console.error('Connection error:', error);
}

app.set('view engine', 'ejs')


app.get('/',(req,res) => {
    res.render("index")
})

app.use('/enviar', anotacoesRouter)

app.use('/ver', anotacoesRouter)

app.listen(5000 , ()=> console.log('Servidor rodando na porta 5000.'))