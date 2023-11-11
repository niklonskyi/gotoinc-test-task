<script setup>
import { ref } from 'vue'
import { useRequestStore } from '../stores/requests'
import ModalButton from './ModalButton.vue'

const props = defineProps([
  'id',
  'cityFrom',
  'cityTo',
  'typeOfParcel',
  'dateOfDispatch',
  'description'
])

const store = useRequestStore()
</script>

<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ cityFrom }}</td>
    <td>{{ cityTo }}</td>
    <td>{{ typeOfParcel }}</td>
    <td>{{ dateOfDispatch }}</td>
    <td>{{ description }}</td>
    <td>
      <ModalButton :id="id"> Edit </ModalButton>
    </td>
    <td><button class="btn btn-sm btn-danger" @click="store.deleteById(id)">Delete</button></td>
  </tr>
</template>
