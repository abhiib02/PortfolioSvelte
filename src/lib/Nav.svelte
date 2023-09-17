<script>
    import { page } from "$app/stores";
</script>

<nav>
    <div class="logo">
        <a href="/"><img src="logo.svg" alt="" /></a>
    </div>
    <ul class="main-nav-links">
        <li><a href="/" class:active={$page.url.pathname === "/"}>Home</a></li>
        <li>
            <a href="/work" class:active={$page.url.pathname === "/work"}
                >Work</a
            >
        </li>
        <li>
            <a href="/skills" class:active={$page.url.pathname === "/skills"}
                >Skills</a
            >
        </li>
        <li>
            <a href="/about" class:active={$page.url.pathname === "/about"}
                >About</a
            >
        </li>
        <li>
            <a href="/contact" class:active={$page.url.pathname === "/contact"}
                >Contact</a
            >
        </li>
    </ul>
    <ul class="social">
        <li>
            <a href="https://www.linkedin.com/in/abhishek-bhardwaj-191b9784/"
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
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 2rem 6rem 0 6rem;
    }
    .social {
        font-size: 1.6rem;
    }
    .logo {
        width: 3rem;
        height: 3rem;
        margin-right: 6rem;
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
    .active {
        color: var(--maincolor);
    }
    @media only screen and (max-width: 996px) {
        nav {
            display: flex;
            justify-content: center;
            padding: 1rem 0;
            position: absolute;
            bottom: 0;
            width: 100%;
            background-color: black;
        }
        nav > :not(.main-nav-links) {
            display: none;
        }
    }
</style>
