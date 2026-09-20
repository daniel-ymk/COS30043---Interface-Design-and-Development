<script setup>
import { computed } from 'vue'
import { jobs } from '../data/jobs'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const job = computed(() => jobs.find((item) => item.job_id === props.id))

const detailRows = computed(() => {
  if (!job.value) {
    return []
  }

  return [
    ['Job ID', job.value.job_id],
    ['Job Title', job.value.job_title],
    ['Category', job.value.category],
    ['Location', job.value.location],
    ['Employment Type', job.value.employment_type],
    ['Salary Range', job.value.salary_range],
    ['Job Level', job.value.job_level],
    ['Company', job.value.company],
    ['Supervisor', job.value.supervisor],
    ['Positions Available', job.value.positions_available],
    ['Posted Date', job.value.posted_date],
    ['Application Deadline', job.value.application_deadline],
    ['Start Date', job.value.start_date],
    ['Required Skills', job.value.required_skills.join(', ')],
    ['Preferred Qualifications', job.value.preferred_qualifications.join(', ')],
    ['Tags', job.value.tags.join(', ')],
  ]
})
</script>

<template>
  <article v-if="job">
    <p class="text-uppercase text-primary fw-semibold small mb-2">{{ job.job_id }}</p>
    <h2 class="h3 fw-bold mb-2">{{ job.job_title }}</h2>
    <p class="text-secondary mb-4">{{ job.job_description }}</p>

    <div class="table-responsive">
      <table class="table table-striped table-hover align-middle">
        <tbody>
          <tr v-for="[label, value] in detailRows" :key="label">
            <th scope="row" class="job-field">{{ label }}</th>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>

  <article v-else>
    <h2 class="h3 fw-bold">Job not found</h2>
    <p class="text-secondary mb-0">Please choose a job ID from the list.</p>
  </article>
</template>
