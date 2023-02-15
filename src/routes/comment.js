
const router=require('express').Router();
const auth=require('../middleware/auth')
const {create}=require('../controllers/comments')
router.post('/create/:id', auth.verifyToken,create);

module.exports=router