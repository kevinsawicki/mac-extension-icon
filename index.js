var getIconForExtension = require('./build/Release/finder-icon.node').getIconForExtension

exports.getIconForExtension = function (extension, callback) {
  if (typeof extension !== 'string') extension = String(extension)
  if (typeof callback !== 'function') callback = function () {}
  return getIconForExtension(extension, callback)
}
