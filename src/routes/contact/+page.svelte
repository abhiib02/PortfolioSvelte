<script>
</script>

<div class="about container gcontainer fullpage">
    <div class="Heading">CONTACT</div>
    <div class="Description">
        <p class="sub-heading">Lets Get in Touch</p>
        <p>I am always open to make new friends</p>
        <ul class="social">
            <li>
                <a
                    href="https://www.linkedin.com/in/abhishek-bhardwaj-191b9784/"
                    ><i class="ri-linkedin-box-fill" /></a
                >
            </li>
            <li>
                <a href="https://github.com/abhiib02"
                    ><i class="ri-github-fill" /></a
                >
            </li>
            <li>
                <a href="https://twitter.com/Abhiib02"
                    ><i class="ri-twitter-fill" /></a
                >
            </li>
            <li>
                <a href="https://www.instagram.com/abhiib02/"
                    ><i class="ri-instagram-fill" /></a
                >
            </li>
        </ul>
    </div>

    <div class="Footer">
        Made With 💓 using &nbsp;
        <a href="https://kit.svelte.dev/"><img
            src="https://miro.medium.com/max/400/0*r6OTkIa8jyneCBGY.png"
            alt=""
        /></a>
    </div>

    <form
        action="https://formsubmit.co/abhiib02@gmail.com"
        method="POST"
        class="form"
    >
        <input type="hidden" name="_subject" value="Query From Portfolio" />
        <input type="text" name="_honey" style="display:none" />
        <input
            type="hidden"
            name="_next"
            value="https://bhardwaj.netlify.app/thanks"
        />
        <fieldset class="fieldset">
            <label for="Name">Name</label>
            <input type="text" autocomplete="off" id="Name" name="name" />
        </fieldset>
        <fieldset class="fieldset">
            <label for="Email">Email</label>
            <input type="email" autocomplete="off" id="Email" name="email" />
        </fieldset>
        <fieldset class="fieldset">
            <label for="Name">Message</label>
            <textarea
                rows="10"
                class="input"
                style="height:10rem;padding:10px;"
                autocomplete="off"
                name="message"
            />
        </fieldset>
        <button type="submit" class="submit">Send</button>
    </form>
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
            "Heading form"
            "Description form"
            "Footer form";
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
    .Footer img {
        width: 20px;
        height: 20px;
    }
    .form {
        grid-area: form;
        place-self: center;
        width: 50%;
    }
    label {
        position: absolute;
        color: white;
        background: #050505;
        transform: translate(20px, -50%);
    }
    .input,
    input,
    .input:focus-visible {
        height: 3rem;
        width: 100%;
        background: none;
        border: none;
        color: white;
        padding: 0 1rem;
        resize: none;
    }
    .fieldset,
    .fieldset:focus-visible {
        border: 2px solid var(--maincolor);
        border-radius: 10px;
        position: relative;
        margin: 2rem 0;
    }
    .submit {
        width: 100%;
        border-radius: 10px;
        height: 3rem;
        color: white;
        border: none;
        font-size: 1.5rem;
        background: var(--maincolor);
    }
    .social {
        margin-top: 2rem;
    }
    ul {
        margin: auto 0;
        display: flex;
    }
    li {
        list-style: none;
        padding: 0 0.5rem;
    }
    li a {
        text-decoration: none;
        color: white;
    }
</style>
