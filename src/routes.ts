import express from 'express'
import { candidatesController }from './controllers/candidates-controller';

const router = express.Router()

router.get('/candidates', candidatesController.index)
router.post('/candidates', candidatesController.save)
router.get('/candidates/:id', candidatesController.show)
router.post('/candidates/:id', candidatesController.update)
router.delete('/candidates/:id', candidatesController.delete)


export { router }