<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    let container;
    let world;

    async function main() {
        container = document.querySelector("#scene_6");
        container.addEventListener("keydown", function (event) { world.keyDownHandler(event) });
        container.addEventListener("keyup", function (event) { world.keyUpHandler(event) });
        world = new World(container);

        await world.init();
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
