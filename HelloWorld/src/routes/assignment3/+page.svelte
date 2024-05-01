<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    onMount(() => {
        const container = document.querySelector("#scene_3");

        // 1. Create an instance of the World app
        const world = new World(container);

        // 2. Render the scene
        world.start();
    });
</script>

<p class="display-5 text-center">Assignment 3</p>

<div class="container">
    <div class="row">
        <div class="col scene-col">
            <div class="scene-container" id="scene_3"></div>
        </div>
    </div>
    <div class="row">
        <a href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment3">
        Github</a>
    </div>
</div>