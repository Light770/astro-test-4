export default {
  "name": "faqSticky",
  "title": "FAQ Sticky",
  "type": "object",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
    },
    {
      "name": "faqs",
      "title": "FAQs",
      "type": "array",
      "of": [
        {
          "type": "faq"
        }
      ]
    },
    {
      "name": "image",
      "title": "Image",
      "type": "imageWithAlt"
    }
  ]
}