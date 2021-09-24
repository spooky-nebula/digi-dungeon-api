import { Hex, HexGrid } from '../../map';
import { PriorityQueue, Queue, Vector2 } from '../structs';
import { axialNeighbors } from './hexagonal';

/**
 * Finds a path between the origin and destination on the map
 * @param hexgrid The map
 * @param origin
 * @param destination
 * @returns The hexmap from destination to origin
 */
function pathfind<T extends Hex<Vector2>, H extends HexGrid<T>>(
  hexgrid: H,
  origin: T,
  destination: T,
  //maxcost?: number ???????
  useMoveCost?: boolean
) {
  let frontier = new PriorityQueue<T>();
  frontier.insert(origin, 0);
  let cameFrom = new Map<T, T | undefined>();
  let costSoFar = new Map<T, number>();
  cameFrom.set(origin, undefined);
  costSoFar.set(origin, 0);

  while (!frontier.isEmpty()) {
    let current = frontier.consume();

    if (current && current.position) {
      // Check if we reached the end
      if (
        current.position.x == destination.position.x &&
        current.position.y == destination.position.y
      ) {
        break;
      }

      // Filter neighbors lol I don't know
      let neighbors = findNeighbors<T, H>(hexgrid, current).filter(
        (neighbor) => {
          return cameFrom.get(neighbor) == undefined;
        }
      );

      // I don't even know what is going on here to be honest
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        // Calculate movement cost and add to the current cost
        let newCost = 0;
        let currentCost = costSoFar.get(current);

        if (useMoveCost) {
          newCost = (currentCost || 0) + (neighbor.movecost || 0);
        } else {
          newCost = (currentCost || 0) + 1;
        }
        //
        let cost = costSoFar.get(neighbor);
        if (cost == undefined || newCost < cost) {
          costSoFar.set(neighbor, newCost);
          let priority = newCost;
          frontier.insert(neighbor, priority);
          cameFrom.set(neighbor, current);
        }
      }
    }
  }

  // Find the shortest path from the destination down
  let result: T[] = [destination];
  let cumFrom: T | undefined = destination;
  while (cumFrom) {
    cumFrom = cameFrom.get(cumFrom);

    if (cumFrom) {
      result.push(cumFrom);
    }
  }

  return result;
}

/**
 * Returns an array of adjecent hexes
 * @param hexgrid
 * @param origin
 * @returns
 */
function findNeighbors<T extends Hex<Vector2>, H extends HexGrid<T>>(
  hexgrid: H,
  origin: T
) {
  // Filter neighbors lol I don't know
  return axialNeighbors(origin.position)
    .map((neighbor) => {
      return hexgrid.get(neighbor.x, neighbor.y);
    })
    .filter((neighbor) => neighbor != undefined) as T[];
}

export { pathfind, findNeighbors };
