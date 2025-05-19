export default {
  "name": "page",
  "title": "Page",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string",
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "slug",
      "title": "Slug",
      "type": "slug",
      "options": {
        "source": "title",
        "maxLength": 96
      },
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "seoDescription",
      "title": "SEO Description",
      "type": "text"
    },
    {
      "name": "content",
      "title": "Content",
      "type": "array",
      "of": [
        {
          "type": "block"
        },
        {
          "type": "imageWithAlt"
        },
        {
          "type": "textImage"
        },
        {
          "type": "featureCards"
        },
        {
          "type": "featureList"
        },
        {
          "type": "featureSticky"
        },
        {
          "type": "basicForm"
        },
        {
          "type": "contactCards"
        },
        {
          "type": "faqSticky"
        },
        {
          "type": "homeCTA"
        },
        {
          "type": "highlightRows"
        },
        {
          "type": "signUp"
        },
        {
          "type": "pricingColumns"
        },
        {
          "type": "accordion"
        }
      ]
    }
  ]
}