import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube() {
  const geometry = new BoxGeometry(1, 1, 1);

  const material = new MeshBasicMaterial({ color: "green" });

  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };
