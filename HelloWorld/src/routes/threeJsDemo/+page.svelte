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

<p class="display-5 text-center">Three.js Demo</p>

<div class="container">
    <div class="row">
        <div class="col-9 scene-col">
            <div class="scene-container" id="scene_2"></div>
        </div>
        <div class="col-3">
            <center><strong>Options</strong></center>
            <br />
            <input on:click={world.toggleAnimation} type="checkbox" checked />
            Animation
            <br />
            <input on:click={world.toggleWireframe} type="checkbox" checked/> Wireframe
            <br />
            <br />
            <br />
            <center><strong>Goals</strong></center>
            <p>The goal was to display WebGL 3D graphics in a web application.</p>
            <br />
            <center><strong>Requirements</strong></center>
            <ul id="requirementList">
                <li>Use the three.js library to create a 3D scene.</li>
                <li>Render said scene to a canvas element.</li>
                <li>Control the animation of said scene.</li>
                <li>Using the Svelte framework & deployed on the web.</li>
            </ul>
        </div>
    </div>
    <div class="row">
        <a
            href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/threeJsDemo"
        >
            Github</a
        >
    </div>
</div>
