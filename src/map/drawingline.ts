import { struct } from '../util';

interface DrawingLine {
  origin: struct.Vector2;
  point: DrawingPoint[];
  colour: string;
  lineWidth: number;
}

class DrawingLine implements DrawingLine {
  origin: struct.Vector2;
  points: DrawingPoint[];
  colour: string;
  lineWidth: number;

  constructor() {
    this.origin = { x: 0, y: 0 };
    this.points = [];
    this.colour = 'black';
    this.lineWidth = 3;
  }
}

export default DrawingLine;

interface DrawingPoint extends struct.Vector2 {
  colour: string;
  width: number;
}

class DrawingPoint implements DrawingPoint {
  // Needs performance testing to be implemented
  colour: string;
  width: number;
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.colour = 'black';
    this.width = 3;
  }
}

export { DrawingPoint };
