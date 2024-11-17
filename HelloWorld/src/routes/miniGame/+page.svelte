<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    let container;
    let world;

    function main() {
        container = document.querySelector("#scene_final");

        world = new World(container);

        world.start();

        window.addEventListener("keydown", (e) => {
            world.keyDown(e);
        });

        window.addEventListener("keyup", (e) => {
            world.keyUp(e);
        });
    }

    onMount(() => {
        main();
    });
</script>

<p class="display-5 text-center">Minigame</p>

<div class="container">
    <div class="row">

        <div class="scene-container" id="scene_final"></div>
        
    </div>
    <div class="row">
        <a href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/miniGame">Github</a>
    </div>
</div>
