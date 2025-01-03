<template>
    <div>{{ data }}</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { restaurantCode } = route.params
const { data, error, status: isLoading } = useFetch(`/api/b2c/food-online?rc=${restaurantCode}`)
</script>