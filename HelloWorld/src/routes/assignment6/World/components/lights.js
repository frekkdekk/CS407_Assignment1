import { DirectionalLight, AmbientLight, SpotLight } from 'three';

function createSpotLight() {
  const light = new SpotLight('white', 40);

  light.castShadow = true;
/*   light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;

  light.shadow.camera.near = 500;
  light.shadow.camera.far = 4000;
  light.shadow.camera.fov = 30; */

  light.position.set(0, 5, -5);

  return light;
}

function createDirectionalLight() {
  // Create a directional light
  const light = new DirectionalLight('white', 1);

  // move the light right, up, and towards us
  light.position.set(0, 10, 4);

  light.castShadow = true;

  //Set up shadow properties for the light
  light.shadow.mapSize.width = 512; // default
  light.shadow.mapSize.height = 512; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 500; // default

  return light;
}

function createAmbientLight() {

  const light = new AmbientLight('white', 0.2);

  light.position.set(10, 10, 10);

  return light;
}

export { createDirectionalLight, createAmbientLight, createSpotLight };
