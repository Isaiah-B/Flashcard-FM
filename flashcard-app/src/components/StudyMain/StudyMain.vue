<script setup lang="ts">
    import { ref } from 'vue';

    import { Button } from '../ui/button';

    import IconChevronLeft from '../icons/IconChevronLeft.vue';
    import IconChevronRight from '../icons/IconChevronRight.vue';

    import StudyHeader from './StudyHeader.vue';

    const hasData = ref(false);
</script>

<template>
    <div class="card sectioned-card main-card shadow-3">
        <StudyHeader />
        
        <div class="main-card--content">
            <div v-if="hasData" class="card-content">        
                <div class="main-card--footer">
                    <Button variant="secondary">
                        <IconChevronLeft />
                        Previous
                    </Button>
        
                    <span>Card 1 of 40</span>
        
                    <Button variant="secondary">
                        Next
                        <IconChevronRight />
                    </Button>
                </div>
            </div>
    
            <div v-else class="no-content">
                <h1>No cards to study</h1>
                <p>You don't have any cards yet. Add your first card in the All Cards tab.</p>
    
                <Button
                    variant="secondary_pop"
                    class="no-content--btn"
                >
                    Go to All Cards
                </Button>
            </div>
        </div>
    </div>
</template>

<style>
    /* .main-card {
        display: flex;
        flex-direction: column;
    } */

    .main-card--content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
    }

    .main-card--footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-top: 1px solid var(--color-border);
        padding: var(--card-padding-lg);
    }

    .no-content {
        text-align: center;
        padding: var(--app-spacing-195) 0;
    }
    .no-content h1 {
        font-size: var(--text-2xl);
        font-weight: 600;
        margin-bottom: 0.75rem;
    }
    .no-content p {
        line-height: 140%;
    }

    .no-content--btn {
        margin-top: 2rem;
    }
</style>