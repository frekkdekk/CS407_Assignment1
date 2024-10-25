<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    let container;
    let world;

    function main() {
        container = document.querySelector("#scene_6");

        world = new World(container);

        world.start();

        document.addEventListener("keydown", (event) => {
            if (event.key === " ") {
                world.makeThatBoyRun();
            }
        });
    }

    onMount(() => {
        main();
    });
</script>

<p class="display-5 text-center">GLTF Demo</p>

<div class="container">
    <div class="row">
        <div class="col-9">
            <div class="scene-container" id="scene_6"></div>
        </div>
        <div class="col-3">
            <center><strong>Goals</strong></center>
            <p>The goal was to learn about pre-made models and animation.</p>
            <br />
            <center><strong>Requirements</strong></center>
            <ul id="requirementList">
                <li>Load a pre-made model from a GLTF file, that contains one or more geometries with materials and animations clips.</li>
                <li>Use the three.js animation system.</li>
                <li>Exercise both of these with some form of interactive control.</li>
            </ul>
            <br />
            <center><strong>Instructions</strong></center>
            <p>Wait.... And then <strong>run!</strong>&lpar;spacebar&rpar;</p>
        </div>  
    </div>
    <div class="row">
        <a href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/gltfDemo">Github</a>
    </div>
</div>
