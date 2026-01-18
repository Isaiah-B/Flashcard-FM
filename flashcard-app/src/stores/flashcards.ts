import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Flashcard } from '@/types/flashcard'

interface FlashcardStore {
	flashcards: Flashcard[],
	InitStore: () => void
}

export const useFlashcardStore = defineStore('flashcards', () => {
	const flashcards = ref<Flashcard[]>();
	const currentCard = ref<number>();

	const totalCards = computed(() => flashcards.value?.length);

	const masteredCount = computed(() => (
		flashcards.value
			?.filter(card => card.knownCount >= 5))
			?.length
	);

	const inProgressCount = computed(() => (
		flashcards.value
			?.filter(card => card.knownCount < 5)
			?.length
	));

	const notStartedCount = computed(() => (
		flashcards.value
			?.filter(card => card.knownCount === 0)
			?.length
	));

	const initStore = (input: Flashcard[]) => {
		console.log('init store...')
		flashcards.value = input;
		currentCard.value = 0;
	}

	const increment = () => {
		if (currentCard.value != undefined) {
			const nextIndex = currentCard.value + 1;

			if (nextIndex <= totalCards.value!)
				currentCard.value = nextIndex;
			else
				currentCard.value = 0;
		}
	}

	const decrement = () => {
		if (currentCard.value != undefined) {
			const prevIndex = currentCard.value - 1;

			if (prevIndex >= 0)
				currentCard.value = prevIndex;
		}
	}

	const incrementProgress = (id: string) => {
		const card = flashcards.value?.find(card => card.id === id);
		if (card && card.knownCount < 5) {
			card.knownCount++;
		}
	}

	const resetProgress = (id: string) => {
		const card = flashcards.value?.find(card => card.id === id);
		if (card) card.knownCount = 0;
	}
	return {
		flashcards,
		currentCard,
		totalCards,
		masteredCount,
		inProgressCount,
		notStartedCount,
		initStore,
		increment,
		decrement,
		incrementProgress,
		resetProgress
	}
});