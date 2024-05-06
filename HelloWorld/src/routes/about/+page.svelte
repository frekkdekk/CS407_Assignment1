<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";

    let container;
    let world;

    onMount(() => {
        container = document.querySelector("#about-scene");

        world = new World(container);

        world.start();
    });
</script>

<p class="display-5 text-center">About</p>

<br>

<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col">
            <p>S24 CS407 - Assignment Portfolio</p>
            <p>Mike Deladurantaye</p>
            <ul>
                <li>
                    <a href="https://github.com/frekkdekk/CS407_Assignment1">
                        Github</a>
                </li>
                <li>
                    <a href="https://vercel.com/frekkdekks-projects/cs-407-assignment1/3Nd7F9JbV6S6bpMPYFjgEB16Nasx">
                        Vercel</a>
                </li>
            </ul>
        </div>
        <div class="col"></div>
    </div>
    <div class="row">
        <div class="scene-container" id="about-scene"></div>
    </div>
</div>
