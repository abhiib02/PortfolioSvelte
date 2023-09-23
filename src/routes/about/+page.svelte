<script>
</script>

<div class="about container gcontainer fullpage">
    <div class="Heading">ABOUT US</div>
    <div class="Description">
        I am a Tech enthusiast who want to know about new technologies but fond
        of
        <br /><span>Website Designing and Development</span> <br />I also carry
        <br /><span>Photo shop</span>
        and
        <br /><span>Blender</span>
        Skills
    </div>
    <img class="image" style="" src="image.webp" alt="" />
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 0.5fr 1fr;
        grid-auto-columns: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "Heading image"
            "Description image";
    }

    .Heading {
        grid-area: Heading;
        font-size: 6rem;
        font-weight: bold;
        place-self: center;
        color: white;
    }
    .Heading::first-letter {
        color: var(--maincolor);
    }

    .Description {
        grid-area: Description;
        font-size: 1.5rem;
        color: white;
        place-self: center;
    }

    .image {
        width: 100%;
        height: 99.4%;
        grid-area: image;
        object-fit: cover;
    }
    span {
        font-weight: bold;
        color: var(--maincolor);
    }
    @media only screen and (max-width: 996px) {
        .container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;
            overflow: hidden;
            width: 100%;
        }
        .Heading {
            grid-area: Heading;
            font-size: 3.5rem;
            font-weight: bold;
            place-self: center;
            color: white;
        }
        .Description {
            font-size: 1rem;
            color: white;
        }

        .image {
            width: 100%;
            height: 99.4%;
            grid-area: image;
            object-fit: cover;
        }
    }
</style>
