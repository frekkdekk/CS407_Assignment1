<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";
    import CodeMirror from "svelte-codemirror-editor";

    let container;
    let world;
    let editor1, editor2;

    onMount(() => {
        container = document.querySelector("#scene_7");

        world = new World(container);

        world.start();

        editor1 = new CodeMirror({
            target: document.getElementById("vertex-shader-editor"),
            props: {
                value: "// GLSL here",
                /* options: {
                lineNumbers: true,
                mode: "cpp"
                    } */
                }
        });

        editor2 = new CodeMirror({
            target: document.getElementById("fragment-shader-editor"),
            props: {
                value: "// GLSL here",
                /* options: {
                lineNumbers: true,
                mode: "cpp"
                    } */
                }
        });
    });
</script>

<p class="display-5 text-center">Assignment 7</p>

<div class="container">
    <div class="row">
        <div class="col-7 scene-col">
            <div class="scene-container" id="scene_7"></div>
        </div>
        <div class="col-5">
            <center><strong>Shaders</strong></center>
            <br />
            <label for="vertex-shader-editor" class="centered-label">Vertex Shader</label>
            <div class="code-editor" id="vertex-shader-editor"></div>
            <br />
            <label for="fragment-shader-editor" class="centered-label">Fragment Shader</label>
            <div class="code-editor" id="fragment-shader-editor"></div>
            <br/>
        </div>
        <div class="col-3">
            <center><strong>Goals</strong></center>
            <p>
                The goal of assignment 7 is to do something cool with shaders.
            </p>
            <br />
            <center><strong>Requirements</strong></center>
            <ul id="requirementList">
                <li>
                    Write your own shaders to do something interesting. Feel free to find some inspiration online, but you'll need to build a big part of it yourself. Remember to attribute where you got the idea from, if that's what you did.
                </li>
                <br/>
                <li>
                    Include interaction of some kind that sends uniforms or attributes to your custom shader.
                </li>
                <br/>
                <li>
                    Include more than one object in your scene, but only have your shaders applied to one of those objects. This will enable you to see how different "materials" - and thus shaders - are used for different objects.
                </li>
            </ul>
        </div>
    </div>
    <div class="row">
        <a
            href="https://github.com/frekkdekk/CS407_Assignment1/tree/main/HelloWorld/src/routes/assignment7"
        >
            Github</a
        >
    </div>
</div>
