import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);

  const material = new MeshBasicMaterial({ color: "green" });

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.83, -0.1, 0.8);

  return cube;
}

export { createCube };
