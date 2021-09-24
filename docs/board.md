# Board Data

The board consists of 3 different data types and it is structured following the
following interface:

```typescript
interface Board {
  // Actual grid map data
  grid: HexGrid<Hex<Vector2>>;
  // List of entities
  entityList: Entity[];
  // Background models
  objectList: ObjectEntity[];
}
```

An `Entity` is just a number, all the data attached should be managed by the
clients through Events like `EntityMoveEvent`, `EntityModifyEvent` and the
other Entity Events.

An `ObjectEntity` is a background object and it is mostly defined by the
model and texture as well as its transform vectors. These should be rendered
before the grid and just serve as decoration.

Finally the `HexGrid` is composed of a list of all the possible coordinates.
The entities can move between. This hexgrid and most of the maths provided the
maths provided by the API are based on the Axial Coordinate System which can
be found an explanation and implementation
[here](https://www.redblobgames.com/grids/hexagons/#coordinates-axial) (by
redblobgames). Instead of using a `Vector3` with `x,y,z` coordinates, we
ditch the `y` coordinate since it is redundant to an hexagonal-based grid.
