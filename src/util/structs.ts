interface Vector2 {
  x: number;
  y: number;
}

class Vector2 {
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static Zero: Vector2 = {
    x: 0,
    y: 0
  };
}

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

class Vector3 {
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  static Zero: Vector3 = {
    x: 0,
    y: 0,
    z: 0
  };
}

export { Vector2, Vector3 };
