import { TorusGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

function createTorus() {

    const geometry = new TorusGeometry();
    const material = new MeshStandardMaterial({color: 0x6c26d4});
    const torus = new Mesh(geometry, material);
    const radiansPerSecond = MathUtils.degToRad(30);

    torus.tick = (delta) => {
        torus.rotation.y += radiansPerSecond * delta;
    }

    return torus;
}

export { createTorus }