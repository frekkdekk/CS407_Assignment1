<script>
    import { onMount } from 'svelte';
    import { World } from './World2/world2.js';

    onMount(() => {

        const container = document.querySelector('#scene_2');

        // 1. Create an instance of the World app
        const world = new World(container);

        // 2. Render the scene
        world.render();

    });
</script>

<p class="display-5 text-center">Assignment 2</p>

<div class="container">
    <div class="row">
        
        <div class="col scene-col">
        <button on:click={World.animate()}>
            start animation
        </button>
        
        <button on:click={TODO}>
            view wireframe
        </button>
            <div class="scene-container" id="scene_2"></div>
        </div>
        <div class="col">

        </div>
    </div>
</div>