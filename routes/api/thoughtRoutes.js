//Import express router
const router = require('express').Router();

const {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router
.route('/')
.get(getThoughts)
.post(createThought);

router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);

//Export router
module.exports = router;