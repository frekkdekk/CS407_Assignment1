<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    let newColor;
    let container;
    let world;

    onMount(() => {
        container = document.querySelector("#scene_5");

        world = new World(container);

        newColor = "#800080";
        const inputElement = document.getElementById("colorPicker");

        /* inputElement.addEventListener("input", function (event) {
            const newColor = event.target.value;
            world.updateColor(newColor);
        }); */

        world.start();
    });
</script>

<p class="display-5 text-center">Assignment 5</p>

<div class="container">
    <div class="row">
        <div class="col-9 scene-col">
            <div class="scene-container" id="scene_5"></div>
        </div>
        <div class="col-3">
            <center><strong>Options</strong></center>
            <br />
            <input on:click={world.toggleAnimation} type="checkbox" checked />
            Animation
            <br />
            <input on:click={world.toggleAmbientLight} type="checkbox" checked/> Ambient
            Light
            <br />
            <br />
            <br />
            <center><strong>Goals</strong></center>
            <p>The goal of assignment 5 is to learn how geometries are organized, represented, and delivered to OpenGL and the graphics card.</p>
            <br />
            <center><strong>Requirements</strong></center>
            <ul id="requirementList">
                <li>Construct a custom geometry object manually by specifying vertices and faces in an indexed buffer geometry.</li>
                <li>Use per-vertex colors so we can pass custom attribute data to the vertex shader.</li>
                <li>Implement orbit and optionally camera navigation through the scene.</li>
            </ul>
            <br />
            <center><strong>Instructions</strong></center>
            <p><b>Mouse1</b> pans around the horn.</p>
            <p><b>Mouse2</b> moves the camera.</p>
            <p><b>Scrolling</b> zooms the camera in & out.</p>
        </div>
    </div>
    <div class="row">
        <a
            href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment5"
        >
            Github</a
        >
    </div>
</div>
