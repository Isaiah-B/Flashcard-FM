<script setup lang="ts">
    interface StudyStatProps {
        title: string,
        value: number,
        color: string
    }

    const props = defineProps<StudyStatProps>();
</script>

<template>
    <div class="stat-card shadow-2">
        <div class="stat-card--content">
            <h2>{{ props.title }}</h2>
            <span>{{ props.value }}</span>
        </div>

        <div class="stat-card--icon" :style="{ backgroundColor: props.color }">
            <slot></slot>
        </div>
    </div>
</template>

<style>
    .stat-card {
        display: flex;
        justify-content: space-between;

        width: 100%;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        overflow: hidden;
    }

    .stats-header {
        font-size: var(--text-2xl);
        font-weight: 600;
        margin-bottom: var(--app-spacing-16);
    }
    .stat-card--content {
        padding: 20px;
    }
    .stat-card--content h2 {
        font-weight: 500;
        margin-bottom: 14px;
    }
    .stat-card--content span {
        font-size: var(--text-3xl);
        font-weight: 700;
        line-height: 120%;
    }

    .stat-card--icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--app-spacing-48) 2rem;
    }
</style>