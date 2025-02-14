<template>
    <!-- change the page to get the fresh data -->
    <div v-if="data">{{ data.joke }}</div>
    <NuxtLink :to="{ name: 'about' }">about</NuxtLink>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

const { data } = await useFetch("https://icanhazdadjoke.com/", {
    headers: {
        Accept: "application/json",
    },
    transform(input) {
        return {
            ...input,
            fetchedAt: new Date(),
        };
    },
    getCachedData(key) {
        const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]

        if (!data) {
            // refetch the data
            return
        }

        const expirationDate = new Date(data.fetchedAt);
        // add 10 seconds to expiration date, after 10s the data is gonna be re-fetched
        expirationDate.setTime(expirationDate.getTime() + 10 * 1000)
        const isExpired = expirationDate.getTime() < Date.now()

        if (isExpired) return

        return data
    },
});
</script>
