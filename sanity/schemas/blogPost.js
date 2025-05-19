export default {
  "name": "blogPost",
  "title": "Blog Post",
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
      "name": "publishedAt",
      "title": "Published at",
      "type": "datetime",
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "excerpt",
      "title": "Excerpt",
      "type": "text"
    },
    {
      "name": "mainImage",
      "title": "Main image",
      "type": "image",
      "options": {
        "hotspot": true
      }
    },
    {
      "name": "categories",
      "title": "Categories",
      "type": "array",
      "of": [
        {
          "type": "reference",
          "to": [
            {
              "type": "category"
            }
          ]
        }
      ]
    },
    {
      "name": "tags",
      "title": "Tags",
      "type": "array",
      "of": [
        {
          "type": "reference",
          "to": [
            {
              "type": "tag"
            }
          ]
        }
      ]
    },
    {
      "name": "body",
      "title": "Body",
      "type": "array",
      "of": [
        {
          "type": "block"
        },
        {
          "type": "imageWithAlt"
        }
      ]
    },
    {
      "name": "author",
      "title": "Author",
      "type": "reference",
      "to": [
        {
          "type": "author"
        }
      ]
    },
    {
      "name": "seoDescription",
      "title": "SEO Description",
      "type": "text"
    }
  ]
}