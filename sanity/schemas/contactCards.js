export default {
  "name": "contactCards",
  "title": "Contact Cards",
  "type": "object",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
    },
    {
      "name": "cards",
      "title": "Cards",
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
              "name": "icon",
              "title": "Icon",
              "type": "imageWithAlt"
            },
            {
              "name": "link",
              "title": "Link",
              "type": "url"
            }
          ]
        }
      ]
    }
  ]
}