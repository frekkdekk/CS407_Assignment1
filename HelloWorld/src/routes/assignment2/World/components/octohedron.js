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

function toggleWireframe(octohedron) {
  octohedron.material = isWireframe ? wireframeMaterial : standardMaterial;

}

/* 
Deprecated - Don't forget to export if you use it again.
function createOctohedronWireframe() {
  const geometry = new OctahedronGeometry();
  const material = new MeshBasicMaterial({ color: 'slateblue' });
  const octohedron = new Mesh(geometry, material);
  const wireframe = new WireframeGeometry(octohedron)

  return wireframe;  
} */

export { createOctohedron, wireframeMaterial, standardMaterial };