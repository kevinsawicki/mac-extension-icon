# mac-extension-icon [![Build Status](https://travis-ci.org/kevinsawicki/mac-extension-icon.svg?branch=master)](https://travis-ci.org/kevinsawicki/mac-extension-icon)

Get the PNG Finder image for a file extension.

```javascript
var getIconForExtension = require('mac-extension-icon').getIconForExtension
getIconForExtension('.mp3', function (error, pngBuffer) {
  require('fs').writeFileSync('mp3.png', pngBuffer)
})
```
