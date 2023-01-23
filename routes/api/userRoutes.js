//Import express router
const router = require('express').Router();


const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router
.route('/')
.get(getUsers)
.post(createUser);

router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(createFriend).delete(deleteFriend);

//Export router
module.exports = router;