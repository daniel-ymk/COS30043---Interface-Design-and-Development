<script setup>
import JobList from './components/JobList.vue'
import ToDoList from './components/ToDoList.vue'
</script>

<template>
  <div class="min-vh-100 bg-body-tertiary">
    <header class="app-header border-bottom bg-white">
      <div class="container py-4">
        <p class="text-uppercase text-primary fw-semibold small mb-2">COS30043 Lab 05</p>
        <h1 class="display-6 fw-bold mb-2">Job Explorer and To-Do List</h1>
        <p class="lead text-secondary mb-0">
          Browse hardcoded job records with Vue Router and manage tasks with a Vue component.
        </p>
      </div>
    </header>

    <main class="container py-4 py-lg-5">
      <section class="mb-5" aria-labelledby="job-explorer-heading">
        <div class="d-flex flex-column flex-lg-row gap-4 align-items-start">
          <aside class="job-sidebar bg-white border rounded-3 p-3">
            <h2 id="job-explorer-heading" class="h4 fw-bold mb-3">Job Explorer</h2>
            <JobList />
          </aside>

          <div class="job-content bg-white border rounded-3 p-4">
            <router-view />
          </div>
        </div>
      </section>

      <section aria-labelledby="todo-heading">
        <ToDoList />
      </section>
    </main>
  </div>
</template>
