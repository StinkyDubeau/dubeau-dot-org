## GAME STATE and USER EXPERIENCE

1. Finish making basic state interaction code.
    - Resource interface well constructed / planned. <- Honestly this alone is a good reason to switch to TypeScript.
    - Saving a simple json list of resources contributors <- Contributors include detractors
    - Storing the above json into the server, as per a username and password with client hashing to grant locate a private token
2. Make basic admin UI for manually manipulating the above state.
3. SET THAT ASIDE and start work on tiles / the world.

### Section 1 of Game State

1. Realtime add + subtract functions.
2. Realtime component rendering of different views for same state.
3. Realtime manipulation of stately values. Rendering updates correctly.
4. Explicit json compatibility for good serialization.

## WORLD BUILDING and RESOURCE CALCULATION

1. State / UX to be in a logical state before starting this step.
2.
3.

## Interface of a Tile

- Id: a simple integer reference to a specific tile

```js
//eg "1 meter solar panel"
tile: {
    id: 0001,

    // tile only outputs if all inputs are true
    output: {

        power: 100; //watts
        heat: 100; //watts
    }
    input: {
        sunlight: true;
        coal:
    }
}
```

Disable a solar panel by blocking its light source
`setTile({...tile, tile.input.sunlight: false})`

Disable a generator from lack of fuel (Note: Usage of inline expression)
`setTile({...tile, tile.input.fuel: system.levels.fuel > 0 ? true : false})
