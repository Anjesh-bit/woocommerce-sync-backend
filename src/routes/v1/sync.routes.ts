import { syncProductsHandler } from '../../controller/sync.controller';
import express from 'express';
import { getStatusHandler, syncOrdersHandler } from '../../controller/sync.controller';

const router = express.Router();

router.get('/status', getStatusHandler);

router.post('/orders', syncOrdersHandler);
router.post('/products', syncProductsHandler);

export default router;
