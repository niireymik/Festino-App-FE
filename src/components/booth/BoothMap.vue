<template>
  <div class="dynamic-padding w-full h-auto">
    <div class="relative w-full min-h-[400px] bg-primary-300 border border-primary-900-light rounded-3xl">
      <div class="absolute bottom-5 left-5">
        <button class="shadow-3xl bg-white rounded-t-full border-1 border-primary-900-light p-4 flex justify-center items-center">
          <i class="pi pi-plus text-primary-900 text-lg"></i>
        </button>
        <button class="shadow-3xl bg-white rounded-b-full border-1 border-primary-900-light p-4 flex justify-center items-center">
          <i class="pi pi-minus text-primary-900 text-lg"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="css" scoped>
.dynamic-padding {
  padding-top: calc(10 / 430 * 100%) !important;
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
  padding-bottom: calc(25 / 430 * 100%) !important;
}
</style>