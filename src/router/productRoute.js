import express from "express"

const router = express.Router()

router.get('/', (req, res) => {
    const product = [
        { id: 1, name: "Garrafa d'agua" },
        { id: 2, name: "Garrafa de café" },
        { id: 3, name: "Garrafa de gengibre" },
    ]
    res.json(product)
})

router.post('/', (req, res) => {
    const dados = req.body

    res.json({
        message: 'Produto inserido com sucesso!',
        dados: dados
    })
})

router.put('//:id', (req, res) => {
    res.json({ message: 'Produto atualizado com sucesso!' })
})

router.delete('//:id', (req, res) => {
    res.json({ message: 'Produto removido com sucesso!' })
})

export default router