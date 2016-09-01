{
  "targets": [
    {
      "target_name": "mac-extension-icon",
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ],
      "conditions": [
        ['OS=="mac"', {
          "sources": [
            "MacExtensionIcon.mm",
          ],
          "link_settings": {
            "libraries": [
              "-framework", "AppKit"
            ]
          }
        }],
      ]
    }
  ]
}
