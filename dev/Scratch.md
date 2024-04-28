# Scratch

## (i.e.) the scratch disk on your drive.

### Brainstorming below:

A room object from trystero

```js
room = {
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
