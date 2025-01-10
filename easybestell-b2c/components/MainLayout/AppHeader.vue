<template>
  <div
    class="w-full h-28 flex justify-between items-center px-[19.5rem] shadow-md"
  >
    <div>
      <img
        src="/images/logo-text.svg"
        alt="logo"
        class="w-[200px] object-fit"
      />
    </div>

    <div class="flex items-center gap-sm">
      <div class="relative">
        <input
          v-model="search"
          placeholder="search foods"
          class="border-solid border-gray-300 rounded-full bg-gray-50 focus:ring-rose-400 focus:border-rose-400 text-sm pl-8"
        />

        <i class="icon-search text-stone-400 absolute left-2 top-3" />
      </div>

      <button class="rounded-full bg-rose-500 py-1 px-4 flex justify-center items-center text-white hover:bg-rose-400">
        signup
      </button>

      <button class="border border- border-solid border-rose-400 rounded-full px-5 py-1 flex justify-center items-center text-lg text-rose-400 hover:bg-rose-500 hover:text-white">
        <i class="icon-language" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const search = ref("");
</script>
