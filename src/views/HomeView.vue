<script setup></script>

<template>
  <main class="h-100">
    <div class="px-4 py-5 text-center h-100 d-flex justify-content-center align-items-center">
      <div class="py-5 align-middle">
        <h1 class="display-5 fw-bold">Parcel Transportation</h1>
        <div class="mx-auto">
          <p class="fs-5 mb-4">Made as a test task for Gotoinc by Artem Niklonskyi.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <RouterLink to="/new-request">
              <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">
                Create new Request
              </button>
            </RouterLink>
            <RouterLink to="/parcel-table">
              <button type="button" class="btn btn-outline-dark btn-lg px-4">Parcel Table</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
