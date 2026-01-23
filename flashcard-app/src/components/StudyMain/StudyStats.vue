<script setup lang="ts">
    import { storeToRefs } from 'pinia';

    import { useFlashcardStore } from '@/stores/flashcards';

    import IconStatsInProgress from '../icons/IconStatsInProgress.vue';
    import IconStatsMastered from '../icons/IconStatsMastered.vue';
    import IconStatsNotStarted from '../icons/IconStatsNotStarted.vue';
    import IconStatsTotal from '../icons/IconStatsTotal.vue';
    import StudyStatCard from './StudyStatCard.vue';

    const store = useFlashcardStore();
    const {
        totalCards,
        masteredCount,
        inProgressCount,
        notStartedCount
    } = storeToRefs(store);
</script>

<template>
    <div class="card shadow-3">
        <h1 class="stats-header">Study Statistics</h1>

        <div class="stat-list">
            <StudyStatCard
                :title="'Total Cards'"
                :value="totalCards"
                :color="'#92ADEB'"
            >
                <IconStatsTotal />
            </StudyStatCard>
            
            <StudyStatCard
                :title="'Mastered'"
                :value="masteredCount"
                :color="'#47D9C9'"
            >
                <IconStatsMastered />
            </StudyStatCard>

            <StudyStatCard
                :title="'In Progress'"
                :value="inProgressCount"
                :color="'#E11966'"
            >
                <IconStatsInProgress />
            </StudyStatCard>
        
            <StudyStatCard
            :title="'Not Started'"
                :value="notStartedCount"
                :color="'#F073A3'"
            >
                <IconStatsNotStarted />
            </StudyStatCard>
        </div>
    </div>
</template>

<style>
    .stats-header {
        font-size: var(--text-xl);
        font-weight: 600;
        margin-bottom: var(--app-spacing-16);
    }

    .stat-list {
        display: flex;
        flex-direction: column;
        gap: var(--app-spacing-20);
    }
</style>