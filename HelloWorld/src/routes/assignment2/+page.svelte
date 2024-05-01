<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    let world;

    onMount(() => {
        const container = document.querySelector("#scene_2");

        world = new World(container);

        world.start();
    });
</script>

<p class="display-5 text-center">Assignment 2</p>

<div class="container">
    <div class="row">
        <div class="col scene-col">
            <center>
                <button on:click={world.toggleAnimation}>
                    Animation
                </button>
                <button on:click={world.toggleWireframe}>
                    Wireframe
                </button>
            </center>
            <div class="scene-container" id="scene_2"></div>
        </div>
    </div>
    <div class="row">
        <a
            href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment2"
        >
            Github</a
        >
    </div>
</div>
