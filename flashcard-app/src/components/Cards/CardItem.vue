<script setup lang="ts">
    import Button from '../ui/button/Button.vue';

    import ProgressBar from '../ProgressBar.vue';
    import IconMenu from '../icons/IconMenu.vue';

    import type { Flashcard } from '@/types/flashcard';

    const { card } = defineProps<{ card: Flashcard }>();
</script>

<template>
    <div class="card card-item shadow-3">
        <div class="card-item--header">
            <h1>{{ card.question }}</h1>
        </div>

        <div class="card-item--content">
            <h2>Answer:</h2>
            <p>{{ card.answer }}</p>
        </div>

        <div class="card-item--footer">
            <div class="footer-category">
                <span class="shadow-1">{{ card.category }}</span>
            </div>
            <div class="footer-progress">
                <ProgressBar :count="card.knownCount" :max="5" />
            </div>
            <div class="footer-menu">
                <Button class="footer-menu--btn" variant="menu">
                    <IconMenu />
                </Button>
            </div>
        </div>
    </div>
</template>

<style>
    .card-item {
        display: flex;
        flex-direction: column;

        width: 100%;
        padding: 0;
    }

    .card-item--header {
        padding: 1rem;
        border-bottom: 1px solid var(--color-border);

        font-size: var(--text-lg);
        font-weight: 600;
        line-height: 120%;
    }

    .card-item--content {
        flex-grow: 1;
        padding: 1rem;

        font-size: var(--text-sm);
        font-weight: 500;
    }
    .card-item--content h2 {
        margin-bottom: 0.375rem;
        color: var(--color-muted-foreground );
    }
    .card-item--content p {
        line-height: 140%;
    }

    .card-item--footer {
        display: flex;
        align-items: center;

        border-top: 1px solid var(--color-border);
    }

    .footer-category {
        padding: 0.875rem 0.625rem;
        border-right: 1px solid var(--color-border);
    }
    .footer-category span {
        font-size: var(--text-xs);
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -3%;

        padding: 0.375rem 0.75rem;
        border-radius: 999px;
        border: 1px solid var(--color-border);
    }

    .footer-progress {
        display: flex;
        align-items: center;
        height: 100%;

        flex-grow: 1;
        border-right: 1px solid var(--color-border);
        padding-left: 0.5rem;
    }

    .footer-menu {
        padding: 8px;
    }

    .footer-menu--btn {
        padding: 4px;
    }
    .footer-menu--btn:hover {
        box-shadow: 2px 2px var(--color-border);
    }
</style>