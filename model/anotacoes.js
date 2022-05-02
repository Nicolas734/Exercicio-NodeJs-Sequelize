import db from '../config/db.js'
import { Sequelize } from 'sequelize'

const Anotacoes = db.define('anotacoes', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    telefone:{
        type:Sequelize.STRING,
    },
    email:{
        type:Sequelize.STRING,
    }
})

Anotacoes.sync({force:true})  //toda vez que reiniciar a aplicação a tabela do banco de dados reinicia

export default Anotacoes
