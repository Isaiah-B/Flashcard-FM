<script setup lang="ts">
    import CardFilter from '@/components/CardFilter.vue';
    import CardForm from '@/components/Cards/CardForm.vue';
    import CardsList from '@/components/Cards/CardsList.vue';

</script>

<template>
   <div>
        <CardForm />

        <div class="card-view-filter">
            <CardFilter />
        </div>

        <div class="card-view-list">
            <CardsList />
        </div>
   </div>
</template>

<style>
    .card-view-filter {
        margin-top: var(--app-spacing-48);
    }

    .card-view-list {
        margin-top: var(--app-spacing-32);
    }
</style>