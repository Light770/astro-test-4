export default {
  "name": "pricingPlan",
  "title": "Pricing Plan",
  "type": "object",
  "fields": [
    {
      "name": "name",
      "title": "Name",
      "type": "string"
    },
    {
      "name": "price",
      "title": "Price",
      "type": "number"
    },
    {
      "name": "currency",
      "title": "Currency",
      "type": "string"
    },
    {
      "name": "features",
      "title": "Features",
      "type": "array",
      "of": [
        {
          "type": "string"
        }
      ]
    },
    {
      "name": "isRecommended",
      "title": "Is Recommended",
      "type": "boolean"
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