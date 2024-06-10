import { ConeGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

let standardMaterial = new MeshStandardMaterial({color: "#1E90FF"});

function createCone() {
    const geometry = new ConeGeometry(0.5, 1.5, 8, 1);
    const cone = new Mesh(geometry, standardMaterial);

    const rotateSpeed = MathUtils.degToRad(90);

    cone.position.set(0, 5, 1);

    cone.rotation.set(Math.PI/2, 0, 0);

    cone.material.opacity = 0.3;

    cone.tick = (delta) => {
        cone.rotation.y += rotateSpeed * delta;
    }


    return cone;
}

export { createCone }