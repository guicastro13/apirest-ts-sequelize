import express from 'express'
import { candidatesController }from './controllers/candidates-controller';

const router = express.Router()

router.get('/', (req, res) => res.json({hello: " world"})) 
router.get('/candidates', candidatesController.index)
router.get('/candidates/:id', candidatesController.show)


export { router }