<script setup>
import { ref, watch } from 'vue'

const storageKey = 'lab05-tasks'

const newTask = ref('')
const tasks = ref(loadTasks())

function loadTasks() {
  const savedTasks = localStorage.getItem(storageKey)

  if (!savedTasks) {
    return []
  }

  try {
    return JSON.parse(savedTasks)
  } catch {
    return []
  }
}

function saveTasks() {
  localStorage.setItem(storageKey, JSON.stringify(tasks.value))
}

function getNextTaskId() {
  if (!tasks.value.length) {
    return 1
  }

  return Math.max(...tasks.value.map((task) => task.id)) + 1
}

watch(tasks, saveTasks, { deep: true })

function addTask() {
  const text = newTask.value.trim()

  if (!text) {
    return
  }

  tasks.value.unshift({
    id: getNextTaskId(),
    text,
    priority: '',
  })
  newTask.value = ''
}

function deleteTask(taskId) {
  tasks.value = tasks.value.filter((task) => task.id !== taskId)
}

function cyclePriority(task) {
  if (!task.priority) {
    task.priority = 'Low'
  } else if (task.priority === 'Low') {
    task.priority = 'High'
  } else {
    task.priority = ''
  }
}

function priorityButtonText(task) {
  if (!task.priority) {
    return 'Mark as Low Priority'
  }

  if (task.priority === 'Low') {
    return 'Mark as High Priority'
  }

  return 'Remove Priority'
}
</script>

<template>
  <div class="todo-panel bg-white border rounded-3 p-4">
    <div class="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
      <div>
        <p class="text-uppercase text-primary fw-semibold small mb-2">Task manager</p>
        <h2 id="todo-heading" class="h3 fw-bold mb-0">To-Do List</h2>
      </div>
      <form class="todo-form d-flex gap-2" @submit.prevent="addTask">
        <label class="visually-hidden" for="new-task">New task</label>
        <input
          id="new-task"
          v-model="newTask"
          class="form-control"
          type="text"
          placeholder="Enter a new task"
        />
        <button class="btn btn-primary" type="submit">Add</button>
      </form>
    </div>

    <ul v-if="tasks.length" class="list-group">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="list-group-item d-flex flex-column flex-md-row gap-3 justify-content-between"
      >
        <span class="task-text">
          {{ task.text }}<template v-if="task.priority"> ({{ task.priority }} Priority)</template>
        </span>
        <span class="d-flex flex-wrap gap-2">
          <button class="btn btn-outline-primary btn-sm" type="button" @click="cyclePriority(task)">
            {{ priorityButtonText(task) }}
          </button>
          <button class="btn btn-outline-danger btn-sm" type="button" @click="deleteTask(task.id)">
            Delete
          </button>
        </span>
      </li>
    </ul>

    <p v-else class="text-secondary mb-0">No tasks yet. Add one to begin.</p>
  </div>
</template>
