<script setup>
import { computed } from 'vue'
import { jobs } from '../data/jobs'

const totalJobs = computed(() => jobs.length)
const categories = computed(() => [...new Set(jobs.map((job) => job.category))])
const locations = computed(() => [...new Set(jobs.map((job) => job.location))])
</script>

<template>
  <article>
    <p class="text-uppercase text-primary fw-semibold small mb-2">Overview</p>
    <h2 class="h3 fw-bold mb-3">Explore current opportunities</h2>
    <p class="text-secondary mb-4">
      Select a job ID from the list to view every field for that job. The job data is hardcoded
      in the Vue project as a JavaScript array.
    </p>

    <div class="row g-3 mb-4">
      <div class="col-12 col-md-4">
        <div class="summary-tile">
          <span class="summary-number">{{ totalJobs }}</span>
          <span class="summary-label">Jobs listed</span>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="summary-tile">
          <span class="summary-number">{{ categories.length }}</span>
          <span class="summary-label">Categories</span>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="summary-tile">
          <span class="summary-number">{{ locations.length }}</span>
          <span class="summary-label">Locations</span>
        </div>
      </div>
    </div>

    <h3 class="h5 fw-bold">Available categories</h3>
    <div class="d-flex flex-wrap gap-2 mb-4">
      <span v-for="category in categories" :key="category" class="badge text-bg-primary">
        {{ category }}
      </span>
    </div>

    <h3 class="h5 fw-bold">How to use this section</h3>
    <p class="text-secondary mb-0">
      Use the router links on the left to move between this overview and each job detail page.
    </p>
  </article>
</template>
