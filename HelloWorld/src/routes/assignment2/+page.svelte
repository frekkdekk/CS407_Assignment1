<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    onMount(() => {
        const container = document.querySelector("#scene_2");

        // 1. Create an instance of the World app
        const world = new World(container);

        // 2. Render the scene
        world.render();
    });
</script>

<p class="display-5 text-center">Assignment 2</p>

<div class="container">
    <div class="row">
        <div class="col scene-col">
            <div class="scene-container" id="scene_2"></div>
        </div>
    </div>
    <div class="row">
        <a href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment2">
        Github</a>
    </div>
</div>
