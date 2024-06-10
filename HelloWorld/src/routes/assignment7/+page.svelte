<script>
    import { onMount } from "svelte";
    import { World } from "./World/world.js";
    import { cpp } from "@codemirror/lang-cpp";
    import { oneDark } from "@codemirror/theme-one-dark";
    import CodeMirror from "svelte-codemirror-editor";

    let container;
    let world;


    // indenting the code will indent it in the editor too.
    let vertexShaderCode = `
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
        `;

    let fragmentShaderCode = `
void main() {
    gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
        `;

        
    onMount(() => {
        container = document.querySelector("#scene_7");

        world = new World(container);

        world.start();
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
            <label for="vertex-editor" class="centered-label">Vertex Shader</label>
            <article id="vertex-editor">
                <CodeMirror bind:value={vertexShaderCode} lang={cpp()} theme={oneDark} styles={{
                    "&": {
                        width: "550px",
                        maxWidth: "100%",
                        maxHeight: "400px"
                    }
                }}/>
            </article>
            <br />
            <label for="fragment-editor" class="centered-label">Fragment Shader</label>
            <article id="fragment-editor">
                <CodeMirror bind:value={fragmentShaderCode} lang={cpp()} theme={oneDark} styles={{
                    "&": {
                        width: "550px",
                        maxWidth: "100%",
                        maxHeight: "400px"
                    }
                }}/>
            </article>
            <br/>
            <button on:click={world.updateShaders(vertexShaderCode, fragmentShaderCode)} type="button" class="btn btn-primary">
                Submit Changes
            </button>
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
