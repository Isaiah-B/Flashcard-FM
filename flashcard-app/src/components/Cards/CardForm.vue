<script setup lang="ts">
    import * as z from 'zod';
    import { useForm } from 'vee-validate';
    import { toTypedSchema } from '@vee-validate/zod';

    import { Button } from '../ui/button';
    import { Textarea } from '../ui/textarea';
    import { Input } from '../ui/input';
    import {
        FormControl,
        FormField,
        FormItem,
        FormLabel
    } from '../ui/form';

    import IconCirclePlus from '../icons/IconCirclePlus.vue';

    const formSchema = toTypedSchema(z.object({
        question: z.string().nonempty(),
        answer: z.string().nonempty(),
        category: z.string().nonempty()
    }));

    const form = useForm({
        validationSchema: formSchema
    });
</script>

<template>
    <form class="card form-card shadow-4">
        <FormField v-slot="{ componentField }" name="question">
            <FormItem>
                <FormLabel class="form-label">Question</FormLabel>
                <FormControl>
                    <Input class="form-input" placeholder="e.g., What is the capital of France?" />
                </FormControl>
            </FormItem>
        </FormField>

        <FormField name="answer">
            <FormItem>
                <FormLabel class="form-label">Answer</FormLabel>
                <FormControl>
                    <Textarea class="form-input form-textarea" placeholder="e.g., Paris" />
                </FormControl>
            </FormItem>
        </FormField>

        <FormField name="category">
            <FormItem>
                <FormLabel class="form-label">Category</FormLabel>
                <FormControl>
                    <Input class="form-input" placeholder="e.g., Geography" />
                </FormControl>
            </FormItem>
        </FormField>

        <Button
            type="submit"
            variant="default_pop"
            class="form-btn"
        >
            <IconCirclePlus />
            Create Card
        </Button>
    </form>
</template>

<style>
    .form-card {
        padding: 2rem;
    }

    .form-label {
        font-size: var(--text-md);
    }

    div[data-slot=form-item]:not(:last-of-type) {
        margin-bottom: 1rem;
    }
    .form-input {
        height: auto;
        padding: 1rem;
        font-size: var(--text-md);
        line-height: 140%;

        border-radius: 6px;
        border: 1px solid var(--color-border);
    }

    .form-textarea {
        resize: none;
    }

    .form-btn {
        margin-top: 1.5rem;
    }
</style>