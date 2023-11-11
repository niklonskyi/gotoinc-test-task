<script setup>
import { computed } from 'vue'
import { useRequestStore } from '../stores/requests'
import ParcelRow from '../components/ParcelTableRow.vue'

const store = useRequestStore()

const isRequestsEmpty = computed(() => {
  return store.requests.length === 0 ? true : false
})
</script>

<template>
  <div class="container mt-5">
    <h1 v-if="isRequestsEmpty" class="text-center">No requests!</h1>
    <div v-else class="table-responsive">
      <table class="table">
        <thead class="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">City From</th>
            <th scope="col">City To</th>
            <th scope="col">Type of Parcel</th>
            <th scope="col">Dispatch Date</th>
            <th scope="col">Description</th>
            <th scope="col" />
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          <ParcelRow
            v-for="row in store.requests"
            :id="row.id"
            :cityFrom="row.cityFrom"
            :cityTo="row.cityTo"
            :typeOfParcel="row.typeOfParcel"
            :dateOfDispatch="row.dateOfDispatch"
            :description="row.description"
            :key="row.id"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
