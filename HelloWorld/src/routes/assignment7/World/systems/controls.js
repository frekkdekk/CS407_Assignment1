import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class Controls extends OrbitControls{
    construction (camera, canvas){
        const controls = new OrbitControls(camera, canvas);

        controls.enableDamping = true;
        
    }

    update() {
      this.controls.update();
    }

  tick() {
      this.update();
    }
}