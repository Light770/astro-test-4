export default {
  "name": "imageWithAlt",
  "title": "Image with Alt Text",
  "type": "image",
  "fields": [
    {
      "name": "alt",
      "type": "string",
      "title": "Alternative text",
      "description": "Important for SEO and accessiblity.",
      "validation": "Rule => Rule.required()"
    }
  ],
  "options": {
    "hotspot": true
  }
}