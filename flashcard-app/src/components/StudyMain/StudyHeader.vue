<script setup lang="ts">
    import { Button } from '../ui/button';
    import { Checkbox } from '../ui/checkbox';

    import IconChevronDown from '../icons/IconChevronDown.vue';
    import IconShuffle from '../icons/IconShuffle.vue';
</script>

<template>
    <div class="main-card--header">
        <div class="main-card--filter">
            <Button variant="secondary">
                All Categories
                <IconChevronDown />
            </Button>

            <label class="checkbox-label">
                <Checkbox />
                Hide Mastered
            </label>
        </div>
        
        <Button variant="secondary">
            Shuffle
            <IconShuffle />
        </Button>
    </div>
</template>

<style>
    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .checkbox-label input[type=checkbox] {
        margin-right: 8px;
    }

    .main-card--header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom: 1px solid var(--color-border);
        padding: var(--card-padding-lg);
    }

    .main-card--filter {
        display: flex;
        gap: 16px;
    }
</style>