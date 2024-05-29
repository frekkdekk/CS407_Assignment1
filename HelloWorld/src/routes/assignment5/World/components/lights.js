import { DirectionalLight, AmbientLight } from 'three';

function createDirectionalLight() {
  // Create a directional light
  const light = new DirectionalLight('white', 1);

  // move the light right, up, and towards us
  light.position.set(15, 5, 10);

  return light;
}

function createAmbientLight() {

  const light = new AmbientLight('white', 1);

  light.position.set(10, 10, 10);

  return light;
}

export { createDirectionalLight, createAmbientLight };
