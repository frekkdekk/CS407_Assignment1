<script>
    import { onMount } from "svelte";
    import {
        BoxGeometry,
        Color,
        Mesh,
        MeshBasicMaterial,
        PerspectiveCamera,
        Scene,
        WebGLRenderer,
    } from "three";

    onMount(() => {
        // Get a reference to the container element that will hold our scene
        const container = document.querySelector("#scene_1");

        // create a Scene
        const scene = new Scene();

        // Set the background color
        scene.background = new Color("skyblue");

        // create the renderer
        const renderer = new WebGLRenderer();

        // Create a camera
        const fov = 35; // AKA Field of View
        const aspect = container.clientWidth / container.clientHeight;
        const near = 0.1; // the near clipping plane
        const far = 100; // the far clipping plane

        const camera = new PerspectiveCamera(fov, aspect, near, far);

        // every object is initially created at ( 0, 0, 0 )
        // move the camera back so we can view the scene
        camera.position.set(5, 3, 10);

        // create a geometry
        const geometry = new BoxGeometry(2, 2, 2);

        // create a default (white) Basic material
        const material = new MeshBasicMaterial();

        // create a Mesh containing the geometry and material
        const cube = new Mesh(geometry, material);

        // add the mesh to the scene
        scene.add(cube);

        // next, set the renderer to the same size as our container element
        renderer.setSize(container.clientWidth, container.clientHeight);

        // finally, set the pixel ratio so that our scene will look good on HiDPI displays
        renderer.setPixelRatio(window.devicePixelRatio);

        // add the automatically created <canvas> element to the page
        container.append(renderer.domElement);

        // render, or 'create a still image', of the scene
        renderer.render(scene, camera);

    });

</script>

<p class="display-5 text-center">Hello Cube</p>

<div class="container">
    <div class="row">
        <div class="col">
            <div class="scene-container" id="scene_1"></div>
        </div>
    </div>
</div>
