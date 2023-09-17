<script></script>

<div class="container">
    <div class="">
        <div class="Heading">ERROR</div>
        <div class="Heading maincolor">4🤔4</div>
    </div>
</div>

<style>
    .container {
        display: grid;
        height: 100%;
        place-content: center;
    }
    .Heading {
        font-size: 6rem;
        font-weight: bold;
        color: white;
        text-align: center;
    }
    .maincolor {
        text-align: center;
        font-size: 10rem;
        color: var(--maincolor);
    }
    @media only screen and (max-width: 996px) {
        .container {
            display: grid;
            height: 100%;
            place-content: center;
        }
        .Heading {
            grid-area: Heading;
            font-size: 4rem;
            font-weight: bold;
            place-self: center;
            color: white;
        }
    }
</style>
