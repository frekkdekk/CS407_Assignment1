<script>
    import { onMount } from 'svelte';
    import { World } from './World/world.js';

    onMount(() => {

        const container = document.querySelector('#scene_1');

        let world;

        world = new World(container);

        world.animate();

    });
</script>


<p class="display-5 text-center">Assignment 1</p>

<div class="container">
    <div class="row">
        <div class="col scene-col">
            <div class="scene-container" id="scene_1"></div>
        </div>
    </div>
    <div class="row">
        <a href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment1">
        Github</a>
    </div>
</div>
