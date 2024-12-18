import { DirectionalLight, AmbientLight } from 'three';

function createDirectionalLight() {
  // Create a directional light
  const light = new DirectionalLight('white', 8);

  // move the light right, up, and towards us
  light.position.set(10, 10, 10);

  return light;
}

function createAmbientLight() {

  const light = new AmbientLight('white', 8);

  light.position.set(10, 10, 10);

  return light;
}

export { createDirectionalLight, createAmbientLight };
