import { Vector3, VectorKeyframeTrack, AnimationClip } from 'three';

// keyframe info
const times = [0, 1];
const values = [
  new Vector3(0, 10, 10),
  new Vector3(0, 10, 3),
  new Vector3(0, 10, 0)
];

const posTrack = new VectorKeyframeTrack('.position', times, values);

const clip = new AnimationClip('slideEdge', -1, [posTrack]);

export { clip }