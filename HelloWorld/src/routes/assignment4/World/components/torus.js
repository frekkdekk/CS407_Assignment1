import { TorusGeometry, Mesh, MeshLambertMaterial, MathUtils } from 'three';
import { Vector3 } from 'three';
import { Matrix4 } from 'three';

let material = new MeshLambertMaterial({color: "green", refractionRatio: 0.6});

function createTorus() {
    const geometry = new TorusGeometry(8, 0.9, 20, 4);
    const torus = new Mesh(geometry, material);

    // Rotating the torus using a rotation matrix
    const torusAngle = Math.PI / 4;
    const torusAxis = new Vector3(1, 0, 0);
    const torusRotationMatrix = new Matrix4().makeRotationAxis(torusAxis, torusAngle);

    torus.applyMatrix4(torusRotationMatrix);

    const radiansPerSecond = MathUtils.degToRad(30);


    torus.tick = (delta) => {
        torus.rotation.y += radiansPerSecond * delta;
    }

    return torus;
}

export { createTorus }