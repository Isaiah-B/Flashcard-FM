<script setup lang="ts">
import IconStatsTotal from './icons/IconStatsTotal.vue';
import StudyStatCard from './StudyStatCard.vue';


</script>

<template>
    <div class="card shadow-3">
        <h1 class="stats-header">Study Statistics</h1>

        <div class="stat-list">
            <StudyStatCard
                :title="'Total Cards'"
                :value="0"
                :color="'#92ADEB'"
            >
                <IconStatsTotal />
            </StudyStatCard>
        </div>
    </div>
</template>

<style>
    
</style>