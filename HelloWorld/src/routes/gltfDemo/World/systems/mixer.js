import { AnimationClip, AnimationMixer } from "three";

function createMixer(model) {

    const mixer = new AnimationMixer(model);

    return mixer;
}


export { createMixer };
