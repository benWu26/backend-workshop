import { Router } from 'express'

//TODO: implement the routes for orders (Hint: Look at user.route.js)
import {
    getOrders,
    getOrder, 
    createOrder,
    updateOrder,
    deleteOrder
} from 'controllers/order.controller'

const orderRouter = Router()

orderRouter.get('/', getOrders)
orderRouter.get('/:id', getOrder)
orderRouter.post('/', createOrder)
orderRouter.delete('/:id', deleteOrder)
orderRouter.patch('/:id', updateOrder)

export default orderRouter