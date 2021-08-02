import { struct } from '../util';

interface DrawingLine {
  origin: struct.Vector2;
  point: DrawingPoint[];
  colour: string;
  lineWidth: number;
}

class DrawingLine {
  constructor() {
    this.origin = { x: 0, y: 0 };
    this.point = [];
    this.colour = 'black';
    this.lineWidth = 3;
  }
}

export default DrawingLine;

interface DrawingPoint extends struct.Vector2 {
  colour: string; // Needs performance testing to be implemented
  width: number;
}

class DrawingPoint {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.colour = 'black';
    this.width = 3;
  }
}

export { DrawingPoint };
