# Scratch

## (i.e.) the scratch disk on your drive.

### Brainstorming below:

Geek Submission Object:
[
  {
    "Mirrors are adequately adjusted": false
  },
  {
    "Brake lights, headlights, and taillights are all working": false
  },
  {
    "Tires are in good condition, with adequate tread and correct pressure": true
  },
  {
    "Turn-signals are working": false
  },
  {
    "Registration and insurance papers are in the glovebox: VIN numbers match": false
  },
  {
    "Windshield wiper blades are in good, working condition": false
  },
  {
    "You have a valid drivers license on your person": false
  },
  {
    "Emergency brake is working": false
  },
  {
    "Horn is working": false
  },
  {
    "Windshield is not cracked": false
  },
  false
]



A room object from trystero

```js

// Users should be stateful array of connected user objects.
users: [
    aUser, anotherUser, ...
]

messages: [
    aMessage, anotherMessage, ...
]

message: {
    text: 
}

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
