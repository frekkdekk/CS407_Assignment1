import { TextGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

let material = new MeshStandardMaterial({ color: "green" });

function createText(text) {
    const loader = new FontLoader();

    loader.load('fonts/helvetiker_regular.typeface.json', function (font) {

        const geometry = new TextGeometry(text, {
            font: font,
            size: 80,
            depth: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
        });

        const text = new Mesh(geometry, material);
    });

    

    const radiansPerSecond = MathUtils.degToRad(30);


    text.tick = (delta) => {
        text.rotation.y += radiansPerSecond * delta;
    }

    return text;
}

export { createText }