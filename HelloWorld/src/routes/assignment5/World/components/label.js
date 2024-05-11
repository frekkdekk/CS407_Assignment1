import { CanvasTexture, SpriteMaterial, Sprite } from 'three';


// chatGPT function for creating text - using to help form indices.
function createLabel(text, position) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = 'Bold 20px Arial';
    context.fillStyle = 'rgba(255, 255, 255, 1)';
    context.fillText(text, 0, 20);

    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = true;

    const spriteMaterial = new SpriteMaterial({ map: texture });
    const sprite = new Sprite(spriteMaterial);
    sprite.position.copy(position);
    sprite.scale.set(30, 15, 1);

    return sprite;
};

export { createLabel }