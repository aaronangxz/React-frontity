const settings = {
  "name": "react-blog",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Hi, I'm Aaron",
      "description": "My journey to tech."
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Blog",
              "/blog"
            ],
            [
              "About",
              "/about/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://omwtotech.wordpress.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
