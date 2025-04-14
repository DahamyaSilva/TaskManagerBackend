const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskCompletion
} = require('../controllers/taskController');

// Get all tasks and create a new task
router.route('/')
  .get(getTasks)
  .post(createTask);

// Get, update, and delete a specific task
router.route('/:id')
  .get(getTaskById)
  .put(updateTask)
  .delete(deleteTask);

// Toggle task completion status
router.route('/:id/toggle')
  .patch(toggleTaskCompletion);

module.exports = router;