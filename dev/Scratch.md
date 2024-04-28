# Scratch

## (i.e.) the scratch disk on your drive.

### Brainstorming below:

A room object from trystero

```js

// Users should be stateful array of connected user objects.
users: [
    aUser, anotherUser, ...
]

// A user:
myUser: {
    id: "eaklfjajkweb",
    nick: "nickname",
    dob: Date(),
    colour: "#0f8f3f",
    peerID: "askjehawejkfawef" (Just incase I need this down the road. Not sure if I will.),
}

// A room:
room: {
        makeAction: makeAction(type),
        ping: async ping(id),
        leave: leave(),
        getPeers: getPeers(),
        addStream: addStream(stream, targets, meta),
        removeStream: removeStream(stream, targets),
        addTrack: addTrack(track, stream, targets, meta),
        removeTrack: removeTrack(track, stream, targets),
        replaceTrack: replaceTrack(oldTrack, newTrack, stream, targets, meta),
        onPeerJoin: onPeerJoin(f),
    };
```
