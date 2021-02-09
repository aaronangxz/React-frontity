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
      "name": "@awsmin/f1",
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
            "showOnList": true,
            "showOnPost": true
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
