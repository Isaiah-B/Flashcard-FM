import data from './data.json';

import type { Flashcard } from '@/types/flashcard';

function getCategoriesMap(cards: Flashcard[]) {
    const map = new Map();

    cards.forEach(card => {
        map.set(card.category, (map.get(card.category) ?? 0) + 1);
    });

    return map;
}

export function InitializeLocalStorage() {
    if (!localStorage.getItem('flashcards')) {
        const flashcardsSerialized = JSON.stringify(data.flashcards);
        localStorage.setItem('flashcards', flashcardsSerialized);
    }
        
    if (!localStorage.getItem('categories')) {
        const categoriesMap = getCategoriesMap(data.flashcards);
        const categoriesSerialized = JSON.stringify(Array.from(categoriesMap.entries()));
        localStorage.setItem('categories', categoriesSerialized);
    }   
}

export function getCards(): Flashcard[] {
    const entry = localStorage.getItem('flashcards');

    if (entry) {
        return JSON.parse(entry);
    }

    throw new Error('Failed to retrieve flashcards from LocalStorage');
}

export function getCategories(): Map<string, number> {
    const entry = localStorage.getItem('categories');

    if (entry) {
        return new Map(JSON.parse(entry));
    }

    throw new Error('Failed to retrieve categories from LocalStorage');
}

export function updateCard(id: String, updated: Flashcard) {
    const entry = localStorage.getItem('flashcards');

    if (!entry) {
        throw new Error('Failed to update flashcard');
    }
    
    const data: Flashcard[] = JSON.parse(entry);
    const cards = data.map(card => {
        if (card.id === id)
            return updated;

        return card;
    });

    localStorage.setItem('flashcards', JSON.stringify(cards));

    return updated;
}