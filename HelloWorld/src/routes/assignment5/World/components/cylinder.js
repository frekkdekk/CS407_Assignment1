import { CylinderGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

let material = new MeshStandardMaterial({color: "#800080"});

function createCylinder() {
    const geometry = new CylinderGeometry(1, 1, 30, 40, 40);
    const cyl = new Mesh(geometry, material);

    const radiansPerSecond = MathUtils.degToRad(30);

    cyl.position.z = -10;
    cyl.position.x = 6;

    cyl.rotation.set(3, -1, 7);

    cyl.tick = (delta) => {
        cyl.rotation.y -= radiansPerSecond * delta;
    }

    return cyl;
}

export { createCylinder }