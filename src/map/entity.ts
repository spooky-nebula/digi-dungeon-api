import { Vector3 } from '../util/structs';

type Entity = number;

interface ObjectEntity {
  id: number;
  cloudModelLink: number;
  cloudTextureLink: number;
  position: Vector3;
  scale: Vector3;
  rotation: Vector3;
  rotationAxis: Vector3;
}

export default Entity;
export { Entity, ObjectEntity };
