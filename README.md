# mac-extension-icon [![Build Status](https://travis-ci.org/kevinsawicki/mac-extension-icon.svg?branch=master)](https://travis-ci.org/kevinsawicki/mac-extension-icon)

Get the native macOS icon for a specific file extension as a PNG image [buffer](https://nodejs.org/api/buffer.html).

```javascript
var getIconForExtension = require('mac-extension-icon').getIconForExtension
getIconForExtension('.mp3', function (error, pngBuffer) {
  require('fs').writeFileSync('mp3.png', pngBuffer)
})
```
