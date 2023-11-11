<script setup>
import { ref } from 'vue'
import ParcelForm from './ParcelForm.vue'

const showModal = ref(false)
const props = defineProps(['id'])
</script>

<template>
  <transition name="modal">
    <div class="modal-mask" v-if="showModal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Parcel {{ id }}</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="showModal = false"
            ></button>
          </div>
          <div class="modal-body">
            <ParcelForm :id="props.id" @hide-modal="showModal = false" />
          </div>
        </div>
      </div>
    </div>
  </transition>
  <button id="show-modal" @click="($event) => (showModal = true)" class="btn btn-sm btn-success">
    Edit
  </button>
  <!-- use the modal component, pass in the prop -->
</template>
