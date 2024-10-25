import { Fog } from "three";

function createFog() {

    const fog = new Fog('#b0e0e6', 10, 50);

    return fog;

}

export { createFog };