<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useRequestStore } from '../stores/requests'

const props = defineProps(['id'])
const store = useRequestStore()
const router = useRouter()
const isEditable = computed(() => {
  return props.id === undefined ? false : true
})
</script>

<template>
  <form
    @submit.prevent="
      ($event) => {
        console.log(id)
        console.log(store.requests)
        const newRequest = {
          cityFrom,
          cityTo,
          typeOfParcel,
          dateOfDispatch,
          description
        }
        if (isEditable) {
          store.$patch((state) => {
            state.requests[id] = { id, ...newRequest }
          })
        } else {
          store.addRequest(newRequest)
        }
        router.push('/parcel-table')
        $emit('hideModal')
      }
    "
  >
    <div class="row mb-3">
      <div class="col">
        <label for="inputCityFrom" class="form-label">The city from which the parcel is sent</label>
        <input type="text" class="form-control" id="inputCityFrom" v-model="cityFrom" required />
      </div>
      <div class="col">
        <label for="inputCityTo" class="form-label">The city to which the parcel is sent</label>
        <input type="text" class="form-control" id="inputCityTo" v-model="cityTo" required />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <label class="form-label" for="selectTypeOfParcel">Type of parcel</label>
        <select class="form-select" id="selectTypeOfParcel" v-model="typeOfParcel" required>
          <option value="Gadgets">Gadgets</option>
          <option value="Drinks">Drinks</option>
          <option value="Clothes">Clothes</option>
          <option value="Medicine">Medicines</option>
          <option value="Other" selected>Other</option>
        </select>
      </div>
      <div class="col">
        <label for="inputDate" class="form-label">Date of dispatch</label>
        <input
          type="date"
          name="inputDate"
          id="inputDate"
          class="form-control"
          v-model="dateOfDispatch"
          required
        />
      </div>
    </div>
    <div class="mb-3">
      <label for="inputDescription" class="form-label">Parcel description</label>
      <input
        type="text"
        name="inputDescription"
        class="form-control"
        id="inputDescription"
        v-model="description"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
