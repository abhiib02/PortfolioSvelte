<script>
</script>

<div class="about container gcontainer fullpage">
    <div class="Heading">THANK YOU</div>
    <div class="Description">
        <p class="sub-heading">Thank you for contacting me</p>
        <p>I will reply to you soon</p>
    </div>

    <div class="Footer">
        <a href="/"><button class="submit">Back to Home</button></a>
    </div>
    <div />
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 0.5fr 1fr 0.5fr;
        grid-auto-columns: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "Heading"
            "Description"
            "Footer";
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
    .sub-heading {
        font-size: 3rem;
        font-weight: 600;
    }
    .Description {
        grid-area: Description;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        place-self: center;
    }
    .Footer {
        grid-area: Footer;
        display: flex;
        justify-content: center;
        color: white;
    }

    .submit {
        width: 100%;
        border-radius: 10px;
        padding: 10px;
        height: 3rem;
        color: white;
        border: none;
        font-size: 1.5rem;
        text-align: center;
        background: var(--maincolor);
    }
    a {
        text-decoration: none;
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
            font-size: 3rem;
            font-weight: bold;
            place-self: center;
            color: white;
        }
        .Description {
            grid-area: Description;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            place-self: center;
        }
    }
</style>
