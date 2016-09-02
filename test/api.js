var assert = require('assert')
var fs = require('fs')
var getIconForExtension = require('..').getIconForExtension
var path = require('path')

var mp3Image = fs.readFileSync(path.join(__dirname, 'fixtures', 'mp3.png'))

describe('getIconForExtension', function () {
  it('calls back with a buffer', function (done) {
    getIconForExtension('.mp3', function (error, buffer) {
      assert.equal(error, null)
      assert.ok(mp3Image.equals(buffer))
      done()
    })
  })
})
