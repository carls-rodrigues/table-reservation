import { Router } from 'express'

export const router = Router()

router.get('/restaurants/:id', (req, res) => {
  const { id } = req.params
  res.json({ id })
})
router.get('/restaurants', (req, res) => {
  res.json({ restaurants: [] })
})
router.post('/restaurants', (req, res) => {
  res.json({ restaurants: [] })
})
