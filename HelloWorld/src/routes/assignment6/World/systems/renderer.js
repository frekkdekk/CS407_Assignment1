import { WebGLRenderer, PCFSoftShadowMap, PCFShadowMap } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer();

  renderer.physicallyCorrectLights = true;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap; // default THREE.PCFShadowMap


  return renderer;
}

export { createRenderer };
