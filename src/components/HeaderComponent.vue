<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            :class="[route.name === 'home' ? 'active' : '']"
            aria-current="page"
            >Main</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/new-request"
            class="nav-link"
            :class="[route.name === 'newRequest' ? 'active' : '']"
            >New Request</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/parcel-table"
            class="nav-link"
            :class="[route.name === 'parcelTable' ? 'active' : '']"
            >Parcel Table</router-link
          >
        </li>
      </ul>
    </header>
  </div>
</template>
