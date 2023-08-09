import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const users = [
        { id: 1, name: 'Jonão' },
        { id: 2, name: 'Wagão' },
        { id: 3, name: 'Japoro' },
    ]
    res.json(users)
})

router.post('/', (req, res) => {
    const dados = req.body

    res.json({
        message: 'Usuário inserido com sucesso!',
        dados: dados
    })
})

router.put('//:id', (req, res) => {
    res.json({ message: 'Usuário atualizado com sucesso!' })
})

router.delete('//:id', (req, res) => {
    res.json({ message: 'Usuário removido com sucesso!' })
})

export default router