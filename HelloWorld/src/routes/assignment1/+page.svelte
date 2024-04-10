<script>
    import { onMount } from 'svelte';
    import { World } from '../../World/world.js';

    onMount(() => {

        const container = document.querySelector('#scene_1');

        // 1. Create an instance of the World app
        const world = new World(container);

        // 2. Render the scene
        world.render();

    });
</script>


<p class="display-5 text-center">Hello Cube</p>

<div class="container">
    <div class="row">
        <div class="col scene-col">
            <div class="scene-container" id="scene_1"></div>
        </div>
    </div>
</div>
