import { SphereGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

let material = new MeshStandardMaterial({color: "#008B8B"});

function createSphere() {
    const geometry = new SphereGeometry(15, 32, 16);
    const sphere = new Mesh(geometry, material);

    sphere.tick = (delta) => {
        //sphere.rotation.y -= radiansPerSecond * delta;
    }

    return sphere;
}

export { createSphere }