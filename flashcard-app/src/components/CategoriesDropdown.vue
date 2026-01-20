<script setup lang="ts">
    import { computed, ref } from 'vue';

    import { Button } from './ui/button';
    import { Checkbox } from './ui/checkbox';
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuTrigger
    } from './ui/dropdown-menu';
    
    import IconChevronDown from './icons/IconChevronDown.vue';

    import { useFlashcardStore } from '@/stores/flashcards';

    import FlashcardsAPI from '@/api/flashcardsAPI';

    const store = useFlashcardStore();
    const { updateFilters } = store;
    
    const appliedFilters = ref<string[]>([]);
    const categoryKeys = computed(() => (
        Array
            .from(FlashcardsAPI.GetCategories()!.keys())
            .sort()
    ));
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="secondary">
                All Categories
                <IconChevronDown />
            </Button>

            <DropdownMenuContent>
                <DropdownMenuItem v-for="key in categoryKeys"
                    class="category-dropdown-item"
                    @select.prevent
                >
                    <label class="checkbox-label">
                        <Checkbox
                            :model-value="store.filters.categories.has(key)"
                            @click="updateFilters(key)"
                        />
                        <span class="category-key">{{ key }}</span>
                        <span class="category-value">({{ store.categories?.get(key) }})</span>
                    </label>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenuTrigger>
    </DropdownMenu>
</template>

<style>
    .category-dropdown-item {
        font-size: var(--text-sm);
        font-weight: 500;
        line-height: 140%;
        padding: 0;
    }

    .checkbox-label {
        width: 100%;
        padding: 8px;
    }

    .category-value {
        color: var(--color-muted-foreground);
    }
</style>