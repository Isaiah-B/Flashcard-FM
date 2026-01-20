<script setup lang="ts">
    import { Button } from '../ui/button';
    import { Checkbox } from '../ui/checkbox';

    import IconShuffle from '../icons/IconShuffle.vue';
    import CategoriesDropdown from '../CategoriesDropdown.vue';

    import { useFlashcardStore } from '@/stores/flashcards';

    const store = useFlashcardStore();
    const { updateFilters, shuffle } = store;
</script>

<template>
    <div class="main-card--header">
        <div class="main-card--filter">
            <CategoriesDropdown />

            <label class="checkbox-label">
                <Checkbox @click="updateFilters('hideMastered')" />
                Hide Mastered
            </label>
        </div>
        
        <Button variant="secondary" @click="shuffle">
            <IconShuffle />
            Shuffle
        </Button>
    </div>
</template>

<style>
    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
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