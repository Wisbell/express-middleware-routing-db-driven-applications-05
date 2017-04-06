const { Router } = require('express');
const router = Router();

router.use(require('./home'))
router.use(require('./chickens'))
router.use(require('./eggs'))
router.use(require('./test-eggs'))


module.exports = router
