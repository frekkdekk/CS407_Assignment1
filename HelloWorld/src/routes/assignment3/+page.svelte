<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    let coneColor;
    let torusColor;
    let container;
    let world;

    onMount(() => {
        container = document.querySelector("#scene_3");

        world = new World(container);

        torusColor = "#6A5ACD";
        coneColor = "#F0E68C";

        const torusColorElement = document.getElementById("torusColor");
        const coneColorElement = document.getElementById("coneColor");

        coneColorElement.addEventListener("input", function (event) {
            const newColor = event.target.value;
            world.updateColor("cone", newColor);
        });

        torusColorElement.addEventListener("input", function (event) {
            const newColor = event.target.value;
            world.updateColor("torus", newColor);
        });
        world.start();
    });
</script>

<p class="display-5 text-center">Assignment 3</p>

<div class="container">
    <div class="row">
        <div class="col-9 scene-col">
            <div class="scene-container" id="scene_3"></div>
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
            <label for="torusColor">Torus Color: </label>
            <input type="color" id="torusColor" value="#6A5ACD" />
            <br />
            <br />
            <label for="coneColor">Cone Color: </label>
            <input type="color" id="coneColor" value="#F0E68C" />
            <br />
            <br />
            <br />
            <center><strong>Goals</strong></center>
            <p>The goal of assignment 3 was to implement the World app from the <a href="https://discoverthreejs.com/">discover three.js</a> online tutorial.</p>
            <br />
            <center><strong>Requirements</strong></center>
            <ul id="requirementList">
                <li>Wrap the three.js scene in a World class that hides its implementation.</li>
                <li>Refactor the design into separate modules for the scene, camera, objects, renderer, and lights.</li>
                <li>Use new and different objects and materials, when compared to the previous assignments.</li>
            </ul>
        </div>
    </div>
    <div class="row">
        <a
            href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment3"
        >
            Github</a
        >
    </div>
</div>
