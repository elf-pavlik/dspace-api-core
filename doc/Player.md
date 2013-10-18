# Player

### Channels
```js
{
  channels: {
    profile: {
      live: {
        url: 'https://example.net/278d8967-f242-46fc-97bc-e0a36f71871e',
        type: 'bayeux'
      },
      history: {
        url: 'https://example.net/278d8967-f242-46fc-97bc-e0a36f71871e',
        type: 'http'
      }
    },
    geolocation: {
      live: {
        url: 'https://example.net/278d8967-f242-46fc-97bc-e0a36f71871e/track',
        type: 'bayeux'
      },
      history: {
        url: 'https://example.net/278d8967-f242-46fc-97bc-e0a36f71871e/track',
        type: 'http'
      }
    },
    activity: {
      live: {
        url: 'https://example.net/278d8967-f242-46fc-97bc-e0a36f71871e/story',
        type: 'bayeux'
      },
      history: {
        url: 'https://example.net/278d8967-f242-46fc-97bc-e0a36f71871e/story',
        type: 'http'
      }
    },
  }
}

```

## LocalPlayer

### Storing data

1. Browser
2. Personal Cloud

## RemotePlayer

### Storing data

1. Cache (Browser)

### Fetching data

1. Cache (Browser)
2. Personal Cloud (foreign)
3. Hub

### Live updates

1. Players Hub
2. Game Hub ?
