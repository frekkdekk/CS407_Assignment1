import { PlaneGeometry, Mesh, MeshStandardMaterial, DoubleSide } from 'three';

let standardMaterial = new MeshStandardMaterial({color: "#556b2f", side: DoubleSide});

function createFloor(width, height) {
    const geometry = new PlaneGeometry(width, height);
    const floor = new Mesh(geometry, standardMaterial);

    floor.receiveShadow = true;

    floor.rotation.x = Math.PI / 2;

    floor.tick = (delta) => {
        //floor.rotation.y -= radiansPerSecond * delta;
    }

    return floor;
}

export { createFloor }
