<script>
    let skills = [
        {
            techlogo: "https://img.icons8.com/color/2x/html-5.png",
            tech: "HTML",
        },
        {
            techlogo: "https://img.icons8.com/color/2x/css3.png",
            tech: "CSS3",
        },
        {
            techlogo: "https://sass-lang.com/assets/img/logos/logo.svg",
            tech: "Sass (SCSS)",
        },
        {
            techlogo: "https://img.icons8.com/color/2x/javascript.png",
            tech: "Javascript",
        },
        {
            techlogo:
                "https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png",
            tech: "Jquery",
        },
        {
            techlogo:
                "http://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png",
            tech: "Bootstrap",
        },
        {
            techlogo: "https://bulma.io/assets/Bulma%20Icon.png",
            tech: "Bulma.io",
        },
        {
            techlogo: "https://materializecss.com/res/materialize.svg",
            tech: "Materialize CSS",
        },
        {
            techlogo: "https://miro.medium.com/max/400/0*r6OTkIa8jyneCBGY.png",
            tech: "SvelteKit",
        },
        {
            techlogo:
                "https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a",
            tech: "Vue JS",
        },
        {
            techlogo: "https://www.php.net/images/logos/new-php-logo.svg",
            tech: "PHP",
        },
        {
            techlogo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/220px-Laravel.svg.png",
            tech: "Laravel",
        },
        {
            techlogo:
                "https://cdn1.iconfinder.com/data/icons/logos-3/304/codeigniter-icon-512.png",
            tech: "CodeIgniter",
        },
        {
            techlogo: "https://pngimg.com/uploads/mysql/mysql_PNG23.png",
            tech: "MySQL",
        },
        {
            techlogo:
                "https://uploads-ssl.webflow.com/613513981b0efaf850830620/630278a964d1f18269a94cd2_figma.svg",
            tech: "Figma",
        },

        {
            techlogo:
                "https://download.blender.org/branding/community/blender_community_badge_white.png",
            tech: "Blender",
        },
    ];
</script>

<div class="about container gcontainer fullpage">
    <div class="Heading">SKILLS</div>
    <div class="Description">
        <div>
            <h3 class="">Front end</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>JAVASCRIPT</li>
                <li>JQUERY</li>
                <li>BOOTSTRAP</li>
                <li>BULMA.IO</li>
                <li>MATERIALIZE CSS</li>
                <li>VUE JS</li>
            </ul>
        </div>
        <div>
            <h3 class="">Back end</h3>
            <ul>
                <li>PHP</li>
                <li>LARAVEL</li>
                <li>CODEIGNITER</li>
            </ul>
            <br />
            <h3 class="">Database</h3>
            <ul>
                <li>MYSQL</li>
            </ul>
            <br />
            <h3 class="">Design Tools</h3>
            <ul>
                <li>FIGMA</li>
            </ul>
        </div>
    </div>
    <div class="boxes">
        <ul>
            {#each skills as skill}
                <li><img src={skill.techlogo} alt="" /></li>
            {/each}
        </ul>
    </div>
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
            "Heading boxes"
            "Description boxes";
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
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        grid-area: Description;
        font-size: 1.2rem;
        color: white;
    }

    .boxes {
        width: 330px;
        height: 50%;
        grid-area: boxes;
        place-self: center;
    }
    .boxes ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        gap: 1px;
    }
    .boxes ul li {
        width: 5rem;
        height: 5rem;
        background: #3333;
        list-style-type: none;
        transition: all 0.3s cubic-bezier(0, 1.03, 0.32, 0.91);
        display: grid;
    }
    .boxes ul li img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
        place-self: center;
    }
    .boxes ul li:hover {
        transform: scale(1.5);
        outline: 1px solid var(--maincolor);
        transform-origin: center;
        border-radius: 10px;
        background: #111;
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
        .Description {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            grid-area: Description;
            font-size: 0.8rem;
            color: white;
        }
        .boxes ul {
            transform-origin: top;
            transform: scale(0.8);
        }
        .boxes ul li img {
            width: 3rem;
            height: 3rem;
            object-fit: contain;
            place-self: center;
        }
        .boxes ul li:active {
            transform: scale(1.5);
            outline: 1px solid var(--maincolor);
            transform-origin: center;
            border-radius: 10px;
            background: #111;
        }
        .Heading {
            grid-area: Heading;
            font-size: 3.5rem;
            font-weight: bold;
            place-self: center;
            color: white;
        }
    }
</style>
