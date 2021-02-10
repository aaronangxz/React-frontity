const settings = {
  "name": "react-blog",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Aaron Ang",
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
              "Blog",
              "/blog/"
            ],
            [
            "Resume",
            "/resume/"
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
          "url": "https://omwtotech.wordpress.com/",
          "homepage" : "/home/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
