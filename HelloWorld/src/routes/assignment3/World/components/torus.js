import { TorusGeometry, Mesh, MeshToonMaterial, MathUtils } from 'three';

let toonMaterial = new MeshToonMaterial({color: "#6A5ACD"});

function createTorus() {
    const geometry = new TorusGeometry();
    const torus = new Mesh(geometry, toonMaterial);

    const radiansPerSecond = MathUtils.degToRad(30);

    torus.position.x = -4;

    torus.tick = (delta) => {
        torus.rotation.y += radiansPerSecond * delta;
    }

    return torus;
}

export { createTorus }