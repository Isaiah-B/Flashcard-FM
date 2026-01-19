import type { Flashcard } from "@/types/flashcard";

import * as api from "./localAPI";

class FlashcardsAPI {
    constructor() {}

    public static Init() {
        api.InitializeLocalStorage();
    }

    public static GetCards(): Flashcard[] {
        try {
            const res = api.getCards();
            return res;
        } catch (err: unknown) {
            if (err instanceof Error)
                console.error(err.message);
        }
        
        return [];
    }

    public static GetCategories(): Map<string, number> | undefined {
        try {
            const res = api.getCategories();
            return res;
        } catch (err: unknown) {
            if (err instanceof Error)
                console.error(err.message);
        }
    }

    public static CreateFlashcard(newCard: Flashcard) {};
    
    public static UpdateFlashcard(id: string, updated: Flashcard) {
        try {
            const res = api.updateCard(id, updated);
            return res;
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            }
        }
    }
}

export default FlashcardsAPI;