import { OctahedronGeometry, Mesh, MeshStandardMaterial } from 'three';

function createOctohedron() {
  const geometry = new OctahedronGeometry();
  const material = new MeshStandardMaterial({ color: 'slateblue' });
  const octohedron = new Mesh(geometry, material);

  octohedron.rotation.set(-0.83, -0.1, 0.8);

  return octohedron;
}

export { createOctohedron };