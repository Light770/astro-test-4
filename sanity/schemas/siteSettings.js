export default {
  "name": "siteSettings",
  "title": "Site Settings",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "title": "Site Title",
      "type": "string",
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "description",
      "title": "Site Description",
      "type": "text"
    },
    {
      "name": "keywords",
      "title": "Keywords",
      "type": "array",
      "of": [
        {
          "type": "string"
        }
      ],
      "description": "Keywords for SEO"
    },
    {
      "name": "logo",
      "title": "Logo",
      "type": "image",
      "options": {
        "hotspot": true
      }
    },
    {
      "name": "navigation",
      "title": "Navigation",
      "type": "array",
      "of": [
        {
          "type": "reference",
          "to": [
            {
              "type": "page"
            }
          ]
        }
      ]
    },
    {
      "name": "socialLinks",
      "title": "Social Links",
      "type": "array",
      "of": [
        {
          "type": "object",
          "fields": [
            {
              "name": "platform",
              "title": "Platform",
              "type": "string"
            },
            {
              "name": "url",
              "title": "URL",
              "type": "url"
            }
          ]
        }
      ]
    },
    {
      "name": "footerText",
      "title": "Footer Text",
      "type": "text"
    },
    {
      "name": "googleAnalyticsId",
      "title": "Google Analytics ID",
      "type": "string",
      "description": "Optional. Used for Google Analytics integration."
    },
    {
      "name": "googleSearchConsoleId",
      "title": "Google Search Console ID",
      "type": "string",
      "description": "Optional. Used for Google Search Console verification."
    },
    {
      "name": "googleTagManagerId",
      "title": "Google Tag Manager ID",
      "type": "string",
      "description": "Optional. Used for Google Tag Manager integration."
    }
  ]
}