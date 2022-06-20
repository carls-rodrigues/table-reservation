import './config/module-alias'
import express from 'express'
import { router } from '@/restaurant/main/routes/RestaurantRoutes'

const app = express()
app.use(express.json())
app.use('/v1', router)
app.listen(3000, () => console.log('Server started on port 3000'))
