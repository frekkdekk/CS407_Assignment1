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

<p class="display-5 text-center">Assignment 6</p>

<div class="container">
    <div class="row">
        <div class="col-10">
            <div class="scene-container" id="scene_6"></div>
        </div>
        <div class="col-2">
            <center><strong>Instructions</strong></center>
            <p>Wait.... And then <strong>run!</strong>&lpar;space&rpar;</p>
        </div>  
    </div>
    <div class="row">
        <a href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment6">Github</a>
    </div>
</div>
