<script setup lang="ts">
    import StudyMain from '@/components/StudyMain/StudyMain.vue';
    import StudyStats from '@/components/StudyMain/StudyStats.vue';
</script>

<template>
    <div class="study-mode-container">
        <StudyMain />

        <StudyStats />
    </div>
</template>

<style>
    .study-mode-container {
        display: grid;
        grid-template-columns: 66% auto;
        gap: 2rem;

        width: 100%;
    }
</style>