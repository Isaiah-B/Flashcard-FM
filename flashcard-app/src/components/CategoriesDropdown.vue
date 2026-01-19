<script setup lang="ts">
    import { ref, watchEffect } from 'vue';

    import { Button } from './ui/button';
    import { Checkbox } from './ui/checkbox';
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuTrigger
    } from './ui/dropdown-menu';
    
    import IconChevronDown from './icons/IconChevronDown.vue';

    import FlashcardsAPI from '@/api/flashcardsAPI';

    const categories = ref<Map<string, number>>();
    const categoryKeys = ref<string[]>();

    watchEffect(() => {
        categories.value = FlashcardsAPI.GetCategories();
        console.log(categories.value)
        categoryKeys.value = Array
            .from(categories.value!.keys())
            .sort();
    });
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
                >
                    <Checkbox />
                    <span class="category-key">{{ key }}</span>
                    <span class="category-value">({{ categories?.get(key) }})</span>
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
    }

    .category-value {
        color: var(--color-muted-foreground);
    }
</style>