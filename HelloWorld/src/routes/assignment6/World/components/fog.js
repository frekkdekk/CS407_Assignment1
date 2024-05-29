import { Fog } from "three";

function createFog() {

    const fog = new Fog('#191970', 10, 15);

    return fog;

}

export { createFog };