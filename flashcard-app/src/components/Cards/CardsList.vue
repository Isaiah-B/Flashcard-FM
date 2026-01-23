<script setup lang="ts">
    import { ref } from 'vue';

    import CardItem from './CardItem.vue';

    import { useFlashcardStore } from '@/stores/flashcards';
import { Button } from '../ui/button';

    const store = useFlashcardStore();
    const numLoadedCards = ref(12);
    const cardsLoading = ref(false);

    const loadCards = () => {
        cardsLoading.value = true;
        numLoadedCards.value += 12;
        cardsLoading.value = false;
    }
</script>

<template>
    <div class="list-wrapper">
        <div class="card-list">
            <CardItem v-for="card in store.flashcards.slice(0, numLoadedCards)"
                :key="card.id" 
                :card="card"
            />
        </div>
    
        <div v-if="cardsLoading">Loading...</div>
        <Button v-else
            class="load-more-btn"
            variant="secondary_pop"
            @click="loadCards"
        >
            Load More
        </Button>
    </div>
</template>

<style>
    .list-wrapper {
        text-align: center;
    }

    .card-list {
        display: grid;
        grid-template-columns: repeat(3, minmax(min-content, 1fr));
        gap: 1.5rem;
        text-align: left;
    }

    .load-more-btn {
        margin-top: var(--app-spacing-32);
    }
</style>