export default {
  "name": "featureList",
  "title": "Feature List",
  "type": "object",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
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