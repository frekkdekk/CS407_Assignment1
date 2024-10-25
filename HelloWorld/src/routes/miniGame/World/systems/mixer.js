import { AnimationMixer } from "three";

export class Mixer extends AnimationMixer {
    constructor(obj) {
        super(obj);
    };

    tick(delta) {
        this.update(delta);
    }
}
