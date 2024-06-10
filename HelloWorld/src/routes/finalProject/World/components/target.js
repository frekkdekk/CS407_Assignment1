import { Object3D } from 'three';

function createTarget() {
  const target = new Object3D();
  target.position.set(0, 5, 8);

  return target;
}

export { createTarget }