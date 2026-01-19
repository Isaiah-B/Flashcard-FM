import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Flashcard } from '@/types/flashcard'
import FlashcardsAPI from '@/api/flashcardsAPI';

interface FlashcardStore {
	flashcards: Flashcard[],
	InitStore: () => void
}

export const useFlashcardStore = defineStore('flashcards', () => {
	const allFlashcards = ref<Flashcard[]>();
	const flashcards = ref<Flashcard[]>();
	const filters = ref<string[]>([]);
	const categories = ref<Map<string, number>>();

	const currentCard = ref<number>();

	const totalCards = computed(() => allFlashcards.value?.length);

	const masteredCount = computed(() => (
		allFlashcards.value
			?.filter(card => card.knownCount >= 5))
			?.length
	);

	const inProgressCount = computed(() => (
		allFlashcards.value
			?.filter(card => card.knownCount < 5)
			?.length
	));

	const notStartedCount = computed(() => (
		allFlashcards.value
			?.filter(card => card.knownCount === 0)
			?.length
	));

	const initStore = () => {
		FlashcardsAPI.Init();
		
		allFlashcards.value = FlashcardsAPI.GetCards();
		flashcards.value = allFlashcards.value;

		categories.value = FlashcardsAPI.GetCategories();
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

			FlashcardsAPI.UpdateFlashcard(id, card);
		}
	}

	const resetProgress = (id: string) => {
		const card = flashcards.value?.find(card => card.id === id);
		if (card) {
			card.knownCount = 0;

			FlashcardsAPI.UpdateFlashcard(id, card);
		}
	}

	const addFilter = (name: string) => {
		if (filters.value?.includes(name))
			return;

		filters.value?.push(name);

		updateFilters();
	}

	const removeFilter = (name: string) => {	
		filters.value = filters.value.filter(f => f != name);

		updateFilters();
	}

	const updateFilters = () => {
		if (filters.value?.length === 0) {
			flashcards.value = [...allFlashcards.value!];
			return;
		}

		console.log(filters.value)
		const hideMastered = filters.value?.includes('hideMastered');

		flashcards.value = allFlashcards.value?.filter(card => {
			if (hideMastered && card.knownCount >= 5)
				return;

			// if (filters.value?.includes(card.category))
				return card;
		})
	}

	return {
		allFlashcards,
		flashcards,
		categories,
		currentCard,
		totalCards,
		masteredCount,
		inProgressCount,
		notStartedCount,
		initStore,
		increment,
		decrement,
		incrementProgress,
		resetProgress,
		addFilter,
		removeFilter,
		updateFilters
	}
});