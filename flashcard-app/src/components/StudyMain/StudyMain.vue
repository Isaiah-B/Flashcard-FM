<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { Button } from '../ui/button';

    import IconChevronLeft from '../icons/IconChevronLeft.vue';
    import IconChevronRight from '../icons/IconChevronRight.vue';

    import StudyHeader from './StudyHeader.vue';
    import StudyModeFlashcard from './StudyModeFlashcard.vue';
    
    import { useFlashcardStore } from '@/stores/flashcards';

    const store = useFlashcardStore();
    const { flashcards, currentCard, totalCards } = storeToRefs(store);
    const { increment, decrement } = store;
</script>

<template>
    <div class="card sectioned-card main-card shadow-3">
        <StudyHeader />
        
        <div class="main-card--content">
            <StudyModeFlashcard v-if="flashcards && flashcards.length > 0"
                :card="flashcards[currentCard!]!"
            />
            
    
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

        <div v-if="flashcards && flashcards.length > 0" class="main-card--footer">
            <Button variant="secondary" @click="decrement">
                <IconChevronLeft />
                Previous
            </Button>

            <span class="card-count">
                {{ `Card ${currentCard! + 1} of ${totalCards}` }}
            </span>

            <Button variant="secondary" @click="increment">
                Next
                <IconChevronRight />
            </Button>
        </div>
    </div>
</template>

<style>
    .main-card {
        display: flex;
        flex-direction: column;
    }

    .main-card--content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        
        padding: 20px;
    }

    .main-card--footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-top: 1px solid var(--color-border);
        padding: var(--card-padding-lg);
    }

    .card-count {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--app-neutral-600);
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
        color: var(--color-muted-foreground);
        line-height: 140%;
    }

    .no-content--btn {
        margin-top: 2rem;
    }
</style>