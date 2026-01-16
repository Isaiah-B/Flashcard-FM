<script setup lang="ts">
    import { ref } from 'vue';

import IconChevronDown from '@/components/icons/IconChevronDown.vue';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


    const isChecked = ref(true);
</script>

<template>
    <h1>Study Mode</h1>
    
    <div class="container">
        <div class="buttons">
            <Button>Default</Button>
            <Button variant="default_pop">Default Pop</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary_pop">Secondary Pop</Button>
            <Button variant="link">Link</Button>
        </div>

        <div class="checkbox">
            <label>
                <Checkbox v-model="isChecked"/>
            </label>
            <span></span>
        </div>

        <div class="dropdown">
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="secondary">
                        Dropdown
                        <IconChevronDown />
                    </Button>
                </DropdownMenuTrigger>
            
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Checkbox />
                        Art
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Checkbox />
                        CSS
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
</template>

<style>
    .container {
        display: flex;
        gap: 4rem;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        gap: 8px;

        width: fit-content;
    }
</style>