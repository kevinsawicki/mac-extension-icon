{
  "targets": [
    {
      "target_name": "finder-icon",
      "sources": [ "FinderIcon.mm" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ],
      "link_settings": {
        "libraries": [
          "-framework", "AppKit"
        ]
      }
    }
  ]
}
