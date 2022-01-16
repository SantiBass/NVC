const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js.js');
const dashboardRoutes = require('./dashboard-routes.js.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
// // router.use((req,res)=>{
// //     res.status(404).end();
// })
module.exports = router;
// https://api.yelp.com/v3/businesses/search?location=NYC&categories=bars&open_now=true