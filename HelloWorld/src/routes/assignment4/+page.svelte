<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    let newColor;
    let container;
    let world;

    onMount(() => {
        container = document.querySelector("#scene_4");

        world = new World(container);

        newColor = "#800080";
        const inputElement = document.getElementById("colorPicker");

        inputElement.addEventListener("input", function (event) {
            const newColor = event.target.value;
            world.updateColor(newColor);
        });

        world.start();
    });
</script>

<p class="display-5 text-center">Assignment 4</p>

<div class="container">
    <div class="row">
        <div class="col-9 scene-col">
            <div class="scene-container" id="scene_4"></div>
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
            <label for="colorPicker">Torus Color: </label>
            <input type="color" id="colorPicker" value="#DC143C" />
            <br />
            <br />
            <br />
            <center><strong>Goals</strong></center>
            <p>The goal of assignment 4 is to use heirarchical structures within the scene and to interact with both parent and child objects independently.</p>
            <br />
            <center><strong>Requirements</strong></center>
            <ul id="requirementList">
                <li>Construct a compound model composed of a primary object & multiple child objects.</li>
                <li>Place those child objects relative to the parent using transformations, at least one of which we create manually using vector or matrix algebra.</li>
                <li>Have interactivity that moves both the entire object as well as the children.</li>
            </ul>
        </div>
    </div>
    <div class="row">
        <a
            href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment4"
        >
            Github</a
        >
    </div>
</div>
