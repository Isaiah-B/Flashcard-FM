<script setup lang="ts">
    import { computed } from 'vue';
    
    import IconMastered from './icons/IconMastered.vue';

    const { count, max } = defineProps<{
        count: number
        max: number
    }>();

    const barLength = computed(() => {
        return (count / max) * 60;
    });
</script>

<template>
    <div v-if="count < max" class="progressbar-container">
        <div class="progressbar-bg">
            <div class="progressbar-fill" :style="{ width: barLength + 'px'}" />
        </div>

        <span class="progress-text">
            {{ `${count}/${max}` }}
        </span>
    </div>

    <div v-else class="progress-mastered shadow-1">
        <IconMastered />
        Mastered
        <span>{{ `${max}/${max}` }}</span>
    </div>
</template>

<style>
    .progressbar-container {
        display: flex;
        align-items: center;
        gap: 8px;
        height: 30px;
    }

    .progressbar-bg {
        position: relative;
        width: 60px;
        height: 8px;
        border-radius: 999px;
        border: 1px solid var(--color-border);
        background-color: var(--color-primary);
    }

    .progressbar-fill {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);

        height: 8px;
        border-radius: 999px;
        background-color: var(--color-border);
    }

    .progress-mastered {
        display: flex;
        align-items: center;
        gap: 6px;

        padding: 6px 12px;
        border: 1px solid var(--color-border);
        border-radius: 999px;
        background-color: var(--app-teal-400);

        font-size: var(--text-xs);
        font-weight: 500;
        letter-spacing: -3%;
        line-height: 130%;
    }
</style>