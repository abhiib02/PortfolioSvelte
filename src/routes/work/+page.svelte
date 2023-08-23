<script>
    import { onMount } from "svelte";

    import Workcard from "../../lib/Workcard.svelte";
    import Projects from "../../lib/assets/projects.json";
    onMount(() => {
        const slider = document.querySelector(".Slider");
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener("mousedown", (e) => {
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("active");
        });
        slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("active");
        });
        slider.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
            console.log(walk);
        });
    });
</script>

<div class="container">
    <div class="Heading ">WORK</div>
    <div class="Slider">
        {#each Projects as Project}
          {#if Project.Status == "Online"}
            <Workcard project={Project} />
            {/if}
        {/each}
    </div>
    <div class="Drag">
        <div style="width:50%;display:flex;justify-content:space-evenly;">
        <span class="main-color">&larr;</span> 
        DRAG
        <span class="main-color">&rarr;</span>
        </div>
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 0.5fr 1fr 0.5fr;
        grid-auto-columns: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "Heading ."
            "Slider Slider"
            "Drag Drag";
    }

    .Heading {
        grid-area: Heading;
    }

    .Slider {
        display: flex;
        overflow-x: scroll;
        grid-area: Slider;
    }
    .Drag {
        
        grid-area: Drag;
        font-size: 2rem;
        display: flex;
        justify-content: space-evenly;
        color: white;
    }
    .main-color {
        color: var(--maincolor);
    }
</style>
