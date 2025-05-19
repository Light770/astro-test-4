export default {
  "name": "pricingColumns",
  "title": "Pricing Columns",
  "type": "object",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
    },
    {
      "name": "plans",
      "title": "Plans",
      "type": "array",
      "of": [
        {
          "type": "pricingPlan"
        }
      ]
    }
  ]
}