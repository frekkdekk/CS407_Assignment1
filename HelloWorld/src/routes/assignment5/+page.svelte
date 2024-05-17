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
            <!-- <br />
            <input type="color" value="green" id="colorPicker" />
            <br /> -->
            <br />
            <input on:click={world.toggleAnimation} type="checkbox" checked />
            Animation
            <br />
            <input on:click={world.toggleAmbientLight} type="checkbox" checked/> Ambient
            Light
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
