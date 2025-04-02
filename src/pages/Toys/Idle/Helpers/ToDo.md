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

1. **State challenges and user experience** should be prioritized over starting this step.
2.
3.

## Component combination

1. Components can be combined with their peers, or even with different components, to create new things.
    - Drag a hamster wheel atop another, and do it again 5 times, to find yourself with a "hamster half dozen"
    - Combined components are easier to manage, and have summarized inputs/outputs.
    - Slowly combining small components into bigger systems will be the direct growth motive of the game.
    - Parts are slowly upgraded until, when their demands are met, they evolve into a new tile.
    - Again. One hamster tile, plus five more, equals a "Hamster Half Dozen", which has its own traits seperate from the individual rodents.
2.

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
    }
}
```

Disable a solar panel by blocking its light source
`setTile({...tile, tile.input.sunlight: false})`

Disable a generator from lack of fuel (Note: Usage of inline expression)
`setTile({ ...tile, tile.input.fuel: (system.levels.fuel > 0 ? true : false) })`
