export default {
  "name": "textImage",
  "title": "Text & Image",
  "type": "object",
  "fields": [
    {
      "name": "text",
      "title": "Text",
      "type": "text"
    },
    {
      "name": "image",
      "title": "Image",
      "type": "imageWithAlt"
    },
    {
      "name": "imagePosition",
      "title": "Image Position",
      "type": "string",
      "options": {
        "list": [
          {
            "title": "Left",
            "value": "left"
          },
          {
            "title": "Right",
            "value": "right"
          }
        ],
        "layout": "radio"
      }
    }
  ]
}