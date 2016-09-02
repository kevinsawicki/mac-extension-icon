var assert = require('assert')
var fs = require('fs')
var getIconForExtension = require('..').getIconForExtension
var path = require('path')

var mp3Image = fs.readFileSync(path.join(__dirname, 'fixtures', 'mp3.png'))

describe('getIconForExtension', function () {
  describe('on Mac', function () {
    if (process.platform !== 'darwin') return

    it('calls back with a buffer', function (done) {
      getIconForExtension('.mp3', function (error, buffer) {
        assert.equal(error, null)
        assert.ok(mp3Image.equals(buffer))
        done()
      })
    })
  })

  describe('on Windows and Linux', function () {
    if (process.platform === 'darwin') return

    it('calls back with an error', function (done) {
      getIconForExtension('.mp3', function (error, buffer) {
        assert.equal(error.message, 'API only available on macOS')
        assert.equal(buffer, undefined)
        done()
      })
    })
  })
})
