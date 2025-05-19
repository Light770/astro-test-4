export default {
  "name": "accordion",
  "title": "Accordion",
  "type": "object",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
    },
    {
      "name": "items",
      "title": "Items",
      "type": "array",
      "of": [
        {
          "type": "accordionItem"
        }
      ]
    }
  ]
}