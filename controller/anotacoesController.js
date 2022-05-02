import Anotacoes from "../model/anotacoes.js"


export const insertMensagem = async (req,res) =>{
    try{
        const dadosMensagem = {
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email
        }
        const dados = await Anotacoes.create(dadosMensagem)
        
        return res.render("index",{nome:req.body.nome, telefone:req.body.telefone, email: req.body.email})
    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}

export const selectMensagem = async (req,res) => {
    try{
        const dados = await Anotacoes.findAll()
        

        return res.render("form", {
            nome:'',
            telefone:'',
            email:'',
            dados
        })

    }catch(error){
        res.status(500).json({ message:error })
    }
}