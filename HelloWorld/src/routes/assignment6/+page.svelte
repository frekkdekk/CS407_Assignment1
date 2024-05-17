<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    let newColor;
    let container;
    let world;

    onMount(() => {
        container = document.querySelector("#scene_6");

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

<p class="display-5 text-center">Assignment 6</p>

<div class="container">
    <div class="row">
        <div class="col-9 scene-col">
            <div class="scene-container" id="scene_6"></div>
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
            href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment6"
        >
            Github</a
        >
    </div>
</div>
