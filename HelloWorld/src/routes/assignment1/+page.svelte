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
        <div class="col-9 scene-col">
            <div class="scene-container" id="scene_1"></div>
        </div>
        <div class="col-3">
            <center><strong>Options</strong></center>
            <br />
            <center><em>N/A</em></center>
            <br />
            <br />
            <center><strong>Goals</strong></center>
            <p>The goal of assignment 1 is to get three.js running locally - copying the code from <a href="https://discoverthreejs.com/">discover three.js</a></p>
            <br />
            <center><strong>Requirements</strong></center>
            <ul id="requirementList">
                <li>Navigate between the homepage and this assignment without refreshing, a few times.</li>
            </ul>
        </div>
    </div>
    <div class="row">
        <a href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment1">
        Github</a>
    </div>
</div>
