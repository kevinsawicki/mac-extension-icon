if (process.platform === 'darwin') {
  var getIconForExtension = require('./build/Release/mac-extension-icon.node').getIconForExtension

  exports.getIconForExtension = function (extension, callback) {
    if (typeof extension !== 'string') extension = String(extension)
    if (typeof callback !== 'function') callback = function () {}
    getIconForExtension(extension, callback)
  }
} else {
  exports.getIconForExtension = function (extension, callback) {
    if (typeof callback === 'function') {
      process.nextTick(function () {
        callback(new Error('API only available on macOS'))
      })
    }
  }
}
