<template>
    <h1>{{ message }}</h1>
</template>

<script lang="ts">
export default {
    props: ["message"]
};
</script>

<style scoped>
    h1 {
        color: white;
    }
</style>
