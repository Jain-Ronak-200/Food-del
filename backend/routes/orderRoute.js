import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { listOrder, placeorder, updateStatus, userOrders, verifyorder } from '../controllers/ordercontroller.js';



const orderRouter =express.Router();

orderRouter.post('/place',authMiddleware,placeorder);
orderRouter.post('/verify',verifyorder);
orderRouter.post('/userorders',authMiddleware,userOrders);
orderRouter.get('/list',listOrder)
orderRouter.post('/status',updateStatus)

export default orderRouter;