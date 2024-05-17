import { PlaneGeometry, Mesh, MeshStandardMaterial } from 'three';

let standardMaterial = new MeshStandardMaterial({color: "#800080"});

function createFloor(width, height) {
    const geometry = new PlaneGeometry(width, height);
    const floor = new Mesh(geometry, standardMaterial);

    floor.rotation.set(90, 0, 0);

    floor.tick = (delta) => {
        //floor.rotation.y -= radiansPerSecond * delta;
    }

    return floor;
}

export { createFloor }
