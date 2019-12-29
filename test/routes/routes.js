import express from 'express';

import PrivateRoute from './private.route'
import PublicRoute from './public.route'
import AuthRoute from './auth.route'

const router = express.Router();

router.use("/auth",AuthRoute,PrivateRoute);
router.use("/",PublicRoute);


module.exports = router;