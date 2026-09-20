<script setup>
import { jobs } from '../data/jobs'
</script>

<template>
  <nav aria-label="Job navigation">
    <router-link class="job-link overview-link" to="/">Overview</router-link>

    <div class="list-group mt-3">
      <router-link
        v-for="job in jobs"
        :key="job.job_id"
        class="list-group-item list-group-item-action job-link"
        :to="{ name: 'job-detail', params: { id: job.job_id } }"
      >
        <span class="fw-semibold">{{ job.job_id }}</span>
        <span class="job-title small">{{ job.job_title }}</span>
      </router-link>
    </div>
  </nav>
</template>
