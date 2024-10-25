import { AnimationMixer } from "three";

function setupModel(data) {
    const guy = data.scene.children[0];

    const mixer = new AnimationMixer(guy);

    const actions = {
        idle: { action: mixer.clipAction(data.animations[3]), flag: true},
        jump: { action: mixer.clipAction(data.animations[6]), flag: false},
        attack: { action: mixer.clipAction(data.animations[10]), flag: false},
        run: { action: mixer.clipAction(data.animations[11]), flag: false},
        walk: { action: mixer.clipAction(data.animations[14]), flag: false},
    };

    guy.tick = (delta) => {
        mixer.update(delta);
        for (const key in actions) {
            if (actions[key].flag) {
                actions[key].action.play();
                if (key === 'run') {
                    guy.position.z += 0.2;
                }
            }
        }
    };

    return {guy, actions};
};

export { setupModel };