import { WebGLRenderer, PCFSoftShadowMap, PCFShadowMap } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap; // default is PCFShadowMap

  return renderer;
}

export { createRenderer };
