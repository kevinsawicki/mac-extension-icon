# finder-icon

Get the PNG Finder image for a file extension.

```javascript
var getIconForExtension = require('finder-icon').getIconForExtension
getIconForExtension('.mp3', function (error, pngBuffer) {
  require('fs').writeFileSync('mp3.png', pngBuffer)
}
```
