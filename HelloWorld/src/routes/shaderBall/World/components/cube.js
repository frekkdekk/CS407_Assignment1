import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube() {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: '#FF5733' });
  const cube = new Mesh(geometry, material);

  cube.position.set(0, 1, 0);

  return cube;
}

export { createCube };
