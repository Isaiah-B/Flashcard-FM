<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { Button } from '../ui/button';
    
    import ProgressBar from '../ProgressBar.vue';
    
    import IconCircleCheck from '../icons/IconCircleCheck.vue';
    import IconReset from '../icons/IconReset.vue';

    import type { Flashcard } from '@/types/flashcard';
    
    const { props } = defineProps<{ props: Flashcard }>();

    const ansRevealed = ref(false);
    const progress = ref(props.knownCount);

    const cardBgClass = computed(() => ({
        'question-bg': !ansRevealed.value,
        'answer-bg': ansRevealed.value, 
    }));

    const revealAnswer = () => ansRevealed.value = true;
    const incrementProgress = () => progress.value++;
    const resetProgress = () => progress.value = 0;

</script>

<template>
    <div class="study-flashcard-wrapper">
        <div
            class="card shadow-2 study-flashcard"
            :class="cardBgClass"
        >
            <div class="study-flashcard--category shadow-1">
                <span>{{ props.category }}</span>
            </div>
    
            <div class="study-flashcard--content">
                <div v-if="ansRevealed" class="study-flashcard--answer">
                    <h1 class="opacity-80">Answer:</h1>
                    <p>{{ props.answer }}</p>
                </div>
    
                <div v-else class="study-flashcard--question">
                    <h1>{{ props.question }}</h1>
    
                    <Button
                        variant="ghost"
                        class="reveal-btn opacity-80"
                        @click="revealAnswer"
                    >
                        Click to reveal answer
                    </Button>
                </div>
            </div> 
    
             <ProgressBar :count="props.knownCount" :max="5" />
        </div>

        <div class="flashcard-actions">
            <Button variant="default_pop" @click="incrementProgress">
                <IconCircleCheck />
                I Know This
            </Button>

            <Button variant="secondary_pop" @click="resetProgress">
                <IconReset />
                Reset Progress
            </Button>
        </div>
    </div>
</template>

<style>
    .study-flashcard-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        flex-grow: 1;
    }

    .study-flashcard {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        flex-grow: 1;
        width: 100%;
        border: 2px solid var(--color-border);
        
        background-image: url(../../assets/images/pattern-flashcard-bg.svg);
        background-position: center;
    }
    .study-flashcard::before {
        position: absolute;
        content: url(../../assets/images/pattern-star-yellow.svg);
        left: 1.75rem;
        bottom: 3.25rem;
    }
    .study-flashcard::after {
        position: absolute;
        right: 2.5rem;
        top: 2.5rem;
    }

    .study-flashcard--category {
        width: fit-content;
        padding: 6px 12px;
        border-radius: 999px;
        background-color: var(--color-card);

        border: 1px solid var(--color-border);
        font-size: var(--text-xs);
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -3%;
    }

    .study-flashcard--content {
        text-align: center;
    }

    .study-flashcard--question {
        font-size: var(--text-3xl);
        font-weight: 700;
    }


    .study-flashcard--answer h1 {
        font-weight: 500;
        margin-bottom: 1rem;
    }
    .study-flashcard--answer p {
        font-size: var(--text-xl);
        font-weight: 600;
    }

    .flashcard-actions {
        display: flex;
        justify-content: center;
        gap: 20px;

        margin-top: var(--app-spacing-20);
    }


    .question-bg {
        background-color: #FC8AE5;
    }
    .study-flashcard.question-bg::after {
        content: url(../../assets/images/pattern-star-blue.svg);
    }

    .answer-bg {
        background-color: #92ADEB;
    }
    .study-flashcard.answer-bg::after {
        content: url(../../assets/images/pattern-star-pink.svg);
    }
</style>