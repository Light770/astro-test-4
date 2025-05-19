export default {
  "name": "featureSticky",
  "title": "Feature Sticky",
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
      "name": "features",
      "title": "Features",
      "type": "array",
      "of": [
        {
          "type": "feature"
        }
      ]
    }
  ]
}