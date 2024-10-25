import { SphereGeometry, Mesh, ShaderMaterial, BufferGeometry, Vector3 } from 'three';


export class Sphere extends Mesh {

    geometry = new BufferGeometry();
    material = new ShaderMaterial();

    constructor(radius, vShader, fShader) {

        const initGeometry = new SphereGeometry(radius, 32, 32);

        const initMaterial = new ShaderMaterial({

            uniforms: {
                xValue: { value: 0.0 },
                yValue: { value: 0.0 },
                zValue: { value: 0.0 },
                objColor: { value: new Vector3(0.3, 0.6, 0.2) },
                time: { value: 0.0 }
            },
            vertexShader: vShader,
            fragmentShader: fShader
        });
        
        super(initGeometry, initMaterial);
        this.geometry = initGeometry;
        this.material = initMaterial;

        this.position.set(0, 1, 0)
    }

    setVertexShader(newShader) {
        this.material.vertexShader = newShader;
        this.material.needsUpdate = true;
    }

    setFragmentShader(newShader) { 
        this.material.fragmentShader = newShader;
        this.material.needsUpdate = true;
    }

    updateUniform(name, value) {
        this.material.uniforms[name].value = value;
    }

    tick(delta) {
        this.material.uniforms.time.value += delta;
        this.material.uniformsNeedUpdate = true;
    }

}