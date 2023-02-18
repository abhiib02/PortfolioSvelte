<script>
    import Carousal from "../lib/Carousal.svelte";
    import Projects from "../lib/assets/projects.json";
</script>

<video autoplay muted id="myVideo">
    <source src="vdo.webm" type="video/webm" />
</video>
<div class="container">
    <div class="carousal" />
    <div class="Logo">
        <img src="logo2.svg" style="width: 100%;" alt="" />
    </div>
    <div class="Worked">
        <div>
            <h3 class="main-text-color">FRONT END</h3>
            <p>HTML,CSS,<br />JAVASCRIPT,BOOTSTRAP,<br />MATERIALIZE,FIGMA</p>
        </div>
        <div>
            <h3 class="main-text-color">BACK END</h3>
            <p>PHP,CODEIGNITER,<br />LARAVEL,MVC,<br />WORDPRESS</p>
        </div>
    </div>
    <div class="Work">
        <h3 class="main-text-color">
            <a href="/work"><i class="ri-eye-fill small-text" /> MY WORK</a>
        </h3>
    </div>
</div>

<style>
    #myVideo {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100vh;
        z-index: -1;
        animation : video-bg 8.36s ease forwards;
        }
    @keyframes video-bg{
        0%{
            filter:grayscale(1);
        }
        90%{
            filter:grayscale(1);
        }
        98%{
            filter:grayscale(1);
        }
        99%{
             filter:grayscale(0);
        }
        100%{
            filter:brightness(1.5);
        }
    }
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1.7fr 0.8fr 0.5fr;
        grid-auto-columns: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "Logo carousal"
            "Worked carousal"
            "Work carousal";
        padding: 0 6rem;
        height: calc(100% - 3rem);
        overflow: hidden;
    }
    a {
        text-decoration: none;
        color: var(--maincolor);
    }
    h3 {
        font-size: 1.5rem;
    }
    .small-text {
        font-size: 1rem;
    }
    .carousal {
        grid-area: carousal;
        place-self: center;
    }

    .Logo {
        grid-area: Logo;
        place-self: center;
        width: 100%;
    }

    .Worked {
        display: flex;
        flex-direction: row;
        grid-area: Worked;
    }
    .Worked div {
        width: 50%;
        word-wrap: break-word;
        color: white;
    }
    .Work {
        grid-area: Work;
    }
</style>
