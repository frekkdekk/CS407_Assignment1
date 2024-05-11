import { SphereGeometry, Mesh, MeshToonMaterial, MathUtils } from 'three';

let material = new MeshToonMaterial({color: "#800080"});

function createSphere() {
    const geometry = new SphereGeometry(1, 1, 30, 40, 40);
    const sphere = new Mesh(geometry, material);

    const radiansPerSecond = MathUtils.degToRad(30);

    sphere.position.z = -10;
    sphere.position.x = 6;

    sphere.rotation.set(3, -1, 7);

    sphere.tick = (delta) => {
        sphere.rotation.y -= radiansPerSecond * delta;
    }

    return sphere;
}

export { createSphere }