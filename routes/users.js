import express from 'express';

import {createUser, deleteUserWithId, getAllUser, getUserWithId, patchUserWithId} from '../controllers/users.js';

const router = express.Router();

// all routes in here are starting with  /users
router.get('/' , getAllUser)

router.post("/" , createUser)

router.get('/:id' ,getUserWithId)

router.delete('/:id' , deleteUserWithId)


router.patch('/:id',patchUserWithId)

export default router