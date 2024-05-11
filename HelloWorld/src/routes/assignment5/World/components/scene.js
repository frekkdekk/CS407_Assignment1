import { Color, Scene } from 'three';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('lightcyan');

  return scene;
}

export { createScene };
