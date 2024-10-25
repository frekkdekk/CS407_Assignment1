import { OctahedronGeometry, Mesh, MeshStandardMaterial } from 'three';

let isWireframe;
let wireframeMaterial = new MeshStandardMaterial({ color: 'slateblue', wireframe: true });
let standardMaterial = new MeshStandardMaterial({ color: 'slateblue' });

function createOctohedron() {
  const geometry = new OctahedronGeometry();
  const octohedron = new Mesh(geometry, standardMaterial);

  octohedron.tick = () => {
    // increase the cube's rotation each frame
    octohedron.rotation.z += .01;
    octohedron.rotation.x += .01;
    octohedron.rotation.y += .01;
  };

  return octohedron;
}


export { createOctohedron, wireframeMaterial, standardMaterial };