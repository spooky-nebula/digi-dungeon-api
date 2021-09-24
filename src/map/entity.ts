import { Vector3 } from '../util/structs';

type Entity = number;

interface ObjectEntity {
  id: number;
  cloudModelLink: string;
  cloudTextureLink: string;
  position: Vector3;
  scale: Vector3;
  rotation: Vector3;
  rotationAxis: Vector3;
  castShadows: boolean;
  recieveShadows: boolean;
}

/**
 * Background objects lol
 */
class ObjectEntity {
  constructor(
    id: number,
    cloudModelLink: string,
    cloudTextureLink: string,
    initialPosition?: Vector3
  ) {
    this.id = id;
    this.cloudModelLink = cloudModelLink;
    this.cloudTextureLink = cloudTextureLink;
    this.position = initialPosition || Vector3.One;
    this.scale = Vector3.One;
    this.rotation = Vector3.One;
    this.rotationAxis = Vector3.One;
    this.castShadows = false;
    this.recieveShadows = false;
  }
}

export default Entity;
export { Entity, ObjectEntity };
