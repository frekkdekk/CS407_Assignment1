import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: 'slateblue' });

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.83, -0.1, 0.8);

  return cube;
}

export { createCube };
