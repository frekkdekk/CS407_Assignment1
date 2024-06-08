<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    const keys = {
        w: false,
        a: false,
        s: false,
        d: false
    }

    let container;
    let world;

    function main() {
        container = document.querySelector("#scene_6");

        document.addEventListener('keydown', (event) => {
            if (event.key === 'w') keys.w = true;
            if (event.key === 'a') keys.a = true;
            if (event.key === 's') keys.s = true;
            if (event.key === 'd') keys.d = true;
        });

        document.addEventListener('keyup', (event) => {
            if (event.key === 'w') keys.w = false;
            if (event.key === 'a') keys.a = false;
            if (event.key === 's') keys.s = false;
            if (event.key === 'd') keys.d = false;
        });

        world = new World(container);

        world.start();
    }

    onMount(() => {
        main();
    });
</script>

<p class="display-5 text-center">Assignment 6</p>

<div class="container">
    <div class="row">
        <div class="scene-container" id="scene_6"></div>
    </div>
    <div class="row">
        <a href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment6">Github</a>
    </div>
</div>
