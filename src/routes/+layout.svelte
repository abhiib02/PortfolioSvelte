<script>
    import { fade } from "svelte/transition";
    import Nav from "../lib/Nav.svelte";
    import "../styles/global.css";
    export let data;
</script>

<Nav />
{#key data.url}
    <div
        class="fullpage"
        in:fade={{ x: -200, duration: 500, delay: 500 }}
        out:fade={{ x: 200, duration: 500 }}
    >
        <slot />
    </div>
{/key}
