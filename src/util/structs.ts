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

  static One: Vector2 = {
    x: 1,
    y: 1
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

  static One: Vector3 = {
    x: 1,
    y: 1,
    z: 1
  };
}

export { Vector2, Vector3 };

interface Queue<T> {
  list: T[];
  current(): T;
  add(newItem: T): T;
  consume(): T;
}

class Queue<T> {
  constructor(firstItem?: T) {
    this.list = [];
    if (firstItem) {
      this.list.unshift(firstItem);
    }
  }

  current(): T {
    return this.list[0];
  }

  add(newItem: T): T {
    this.list.unshift(newItem);
    return this.current();
  }

  consume(): T | undefined {
    return this.list.shift();
  }
}

export { Queue };

interface PriorityQueue<T> {
  data: [number, T][];
  insert(item: T, priority: number): void;
  peek(): T | null;
  consume(): T | null;
  size(): number;
  isEmpty(): boolean;
}

class PriorityQueue<T> {
  constructor() {
    this.data = [];
  }

  insert(item: T, priority: number) {
    if (this.data.length == 0) {
      this.data.push([priority, item]);
      return;
    }

    for (let index = 0; index < this.data.length; index++) {
      if (index == this.data.length - 1) {
        this.data.push([priority, item]);
        return;
      }

      if (this.data[index][0] > priority) {
        this.data.splice(index, 0, [priority, item]);
        return;
      }
    }
  }

  isEmpty() {
    return this.data.length == 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.data[0][1];
    }
  }

  consume() {
    if (this.isEmpty()) {
      return null;
    } else {
      return (this.data.shift() as [number, T])[1];
    }
  }

  size() {
    return this.data.length;
  }
}

export { PriorityQueue };
