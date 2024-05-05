import { TorusGeometry, Mesh, MeshLambertMaterial, MathUtils } from 'three';

let material = new MeshLambertMaterial({color: "red", refractionRatio: 0.6});

function createTorus() {
    const geometry = new TorusGeometry(10, 3, 20, 6);
    const torus = new Mesh(geometry, material);

    const radiansPerSecond = MathUtils.degToRad(30);


    torus.tick = (delta) => {
        torus.rotation.y += radiansPerSecond * delta;
    }

    return torus;
}

export { createTorus }