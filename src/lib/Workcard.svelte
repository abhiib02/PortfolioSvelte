<script>
    export let project;
</script>

<div class="workCard">
    <div class="workImage">
        {#if (project.Image).includes('http')}
        <img src="{project.Image}" alt="" />
        {:else}
        <img src="images/{project.Image}" alt="" />
        {/if}
    </div>
    <div class="workName">
        {project.Name}
    </div>
    <div class="workDesc">
        {project.Type}
    </div>
    <div class="workPublished">
        Published on {project.Published}
    </div>
    <div class="workStatus">
        {#if project.Status == "Online"}
            <div class="light" style="--bg:green;" />
            &nbsp;
            {project.Status}
        {:else}
            <div class="light" style="--bg:red;" />
            &nbsp;
            {project.Status}
        {/if}
    </div>
    <div class="workBtns">
        {#if project.Github != null}
            <a target="__blank" href={project.Github} class="githubbtn btn"
                ><i class="ri-github-fill" /></a
            >
        {/if}
        <a
            target="__blank"
            href={project.Link}
            style={project.Github == null ? "border-radius:10px;" : ""}
            class="linkbtn btn"><i class="ri-arrow-right-circle-fill" /></a
        >
    </div>
</div>

<style>
    .btn {
        width: 60px;
        height: 60px;
        display: grid;
        place-items: center;
        font-size: 1.5rem;
        color: white;
        text-decoration: none;
    }
    .workBtns {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    .linkbtn {
        background-color: var(--maincolor);
        border-radius: 0 0 10px 10px;
    }
    .githubbtn {
        background-color: #444343;
        border-radius: 10px 10px 0 0;
    }

    .light {
        margin: 3px 0 0 0;
        width: 33px;
        height: 10px;
        border-radius: 10px;
        background-color: var(--bg);
    }
    .workStatus {
        display: flex;
        position: absolute;

        color: white;
        bottom: 10px;
        left: 10px;
        font-weight: bold;
        font-size: 0.8rem;
    }
    .workPublished {
        position: absolute;
        bottom: 30px;
        left: 10px;

        font-size: 0.8rem;
        font-weight: lighter;
        color: white;
    }
    .workDesc {
        padding: 0px 10px;
        width: 70%;
        font-size: 0.8rem;
        color: white;
    }
    .workName {
        padding: 10px 10px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.9rem;
        color: var(--maincolor);
    }
    .workImage img {
        width: 100%;
        height: 187px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }
    .workCard {
        position: relative;
        min-width: 289px;
        min-height: 334px;
        margin: 10px;
        border-radius: 10px;
        outline: 1px solid var(--maincolor);
    }
</style>
