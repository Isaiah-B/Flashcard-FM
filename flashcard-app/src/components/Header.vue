<script setup lang="ts">

	import { Button } from './ui/button';

</script>

<template>
    <header>
        <img src="../assets/images/logo-large.svg" alt="Flashcard logo">

        <nav class="app-nav">
            <RouterLink active-class="link-active" to="/">
				<Button variant="link">Study Mode</Button>
            </RouterLink>

            <RouterLink active-class="link-active" to="/cards">
				<Button variant="link">All Cards</Button>
            </RouterLink>
        </nav>
    </header>
</template>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

    .app-nav {
		display: flex;
		align-items: center;
		gap: 4px;
		
		width: fit-content;
		border: 1px solid var(--color-border);
		border-radius: 999px;
		padding: 4px;
		
		background-color: var(--app-white);
		box-shadow: 1px 2px var(--color-border);
	}

	.link-active button {
		border: 1px solid var(--color-border);
		background-color: var(--color-branding);
	}
</style>