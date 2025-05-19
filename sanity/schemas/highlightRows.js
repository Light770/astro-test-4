export default {
  "name": "highlightRows",
  "title": "Highlight Rows",
  "type": "object",
  "fields": [
    {
      "name": "rows",
      "title": "Rows",
      "type": "array",
      "of": [
        {
          "type": "object",
          "fields": [
            {
              "name": "title",
              "title": "Title",
              "type": "string"
            },
            {
              "name": "description",
              "title": "Description",
              "type": "text"
            },
            {
              "name": "image",
              "title": "Image",
              "type": "imageWithAlt"
            },
            {
              "name": "buttonText",
              "title": "Button Text",
              "type": "string"
            },
            {
              "name": "buttonLink",
              "title": "Button Link",
              "type": "url"
            }
          ]
        }
      ]
    }
  ]
}