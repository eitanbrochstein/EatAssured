<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import { onMount } from 'svelte';

    let count = 0;
    function updateClick() {
        count++;
    }

    onMount(() => {
        const clickButton: HTMLButtonElement = document.getElementById('clickButton') as HTMLButtonElement;
    });
</script>

<main>
    <Navbar></Navbar>
    <section>
        <h1>Clicked {count}</h1>
        <button id="clickButton" on:click={updateClick}>Hello</button>
    </section>
</main>

<style lang="scss">
    #clickButton {
        background-color: red;
        border-radius: 2rem;
    }
</style>
