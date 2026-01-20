import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Flashcard } from '@/types/flashcard'
import FlashcardsAPI from '@/api/flashcardsAPI';

interface FlashcardStore {
	flashcards: Flashcard[],
	InitStore: () => void
}

interface Filters {
	hideMastered: boolean,
	categories: Set<string>
}

export const useFlashcardStore = defineStore('flashcards', () => {
	const allFlashcards = ref<Flashcard[]>([]);
	const flashcards = ref<Flashcard[]>([]);
	const filters = ref<Filters>({ hideMastered: false, categories: new Set() });
	const categories = ref<Map<string, number>>();

	const currentCard = ref<number>(0);

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
		const nextIndex = currentCard.value + 1;

		currentCard.value = nextIndex <= flashcards.value.length - 1
			? nextIndex
			: 0;
	}

	const decrement = () => {
		const prevIndex = currentCard.value - 1;

		currentCard.value = prevIndex >= 0
			? prevIndex
			: flashcards.value.length - 1
			
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

	const updateFilters = (name: string) => {
		if (name === 'hideMastered') {
			filters.value.hideMastered = !filters.value.hideMastered;
		}
		else {
			if (filters.value?.categories.has(name)) {
				filters.value.categories.delete(name);
			} else {
				filters.value?.categories.add(name);
			}
			
		}

		if (!filters.value.hideMastered && filters.value?.categories.size === 0) {
			flashcards.value = [...allFlashcards.value!];
			return;
		}

		flashcards.value = allFlashcards.value?.filter(card => {
			if (filters.value.hideMastered && card.knownCount >= 5)
				return;

			if (filters.value.categories.size > 0) {
				if (filters.value?.categories.has(card.category))
					return card;
			}
			else
				return card
		})
	}

	const shuffle = () => {
		let i = flashcards.value.length, j, temp;
		while (--i > 0) {
			j = Math.floor(Math.random() * (i + 1));
			temp = flashcards.value[j];
			flashcards.value[j] = flashcards.value[i]!;
			flashcards.value[i] = temp!;
		}
	}

	return {
		allFlashcards,
		flashcards,
		categories,
		filters,
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
		updateFilters,
		shuffle
	}
});