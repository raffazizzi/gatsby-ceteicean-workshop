# Gatsby CETEIcean Workshop

This repository was created for the TEI Members Meeting and Conference workshop _Building TEI-powered websites with static site technology. A hands on exploration of the publishing toolkit of the Scholarly Editing Journal_.

This is a simple Gatsby site showcasing some uses of the libraries [gatsby-transformer-ceteicean](https://www.npmjs.com/package/gatsby-transformer-ceteicean) and [gatsby-theme-ceteicean](https://www.npmjs.com/package/gatsby-theme-ceteicean).

To keep things simple, this template uses JavaScript (as opposed to TypeScript) and CSS imports. For a more sophisticated use of these tools, look at the [Scholarly Editing Micro-Editions Template](https://gitlab.com/scholarly-editing/se-microedition-template).

## Usage

Make sure you have the latest Node JS LTS installed. Then install with:

```
npm i
```

And run the site with:

```
npm start
```

## Examples included

### Basic Gatsby principles

* plugins configuration: [`gatsby-config.js`](https://github.com/raffazizzi/gastby-ceteicean-workshop/blob/main/gatsby-config.js)
* querying data from GraphQL
  * querying `siteMetadata` for metadata and a navbar: [`layout.js`](https://github.com/raffazizzi/gastby-ceteicean-workshop/blob/main/src/components/layout.js#L10)
  * querying TEI data loaded by gatsby-transformer-ceteicean to build a TOC: [`index.js`](https://github.com/raffazizzi/gastby-ceteicean-workshop/blob/main/src/pages/index.js#L7)

### Shadowing gatsby-theme-ceteicean

* defining a simple React component for a TEI element: [`Pb.js`](https://github.com/raffazizzi/gastby-ceteicean-workshop/blob/main/src/gatsby-theme-ceteicean/components/Pb.js)
* mapping (routing) TEI elements to default and custom React components: [`Ceteicean.js`](https://github.com/raffazizzi/gastby-ceteicean-workshop/blob/main/src/gatsby-theme-ceteicean/components/Ceteicean.js#L17)
* React component with state management and component composition: [`Note.js`](https://github.com/raffazizzi/gastby-ceteicean-workshop/blob/main/src/gatsby-theme-ceteicean/components/Note.js)
* React component as above with TEI DOM lookup: [`PlaceName.js`](https://github.com/raffazizzi/gastby-ceteicean-workshop/blob/main/src/gatsby-theme-ceteicean/components/PlaceName.js)

### Applying TEI transformations

Transfomrations can be queued pre- and post- processing by gatsby-transformer-ceteicean. They are processed before ingestion into the GraphQL layer.

* Run an XSLT to add note numbers: [`gatsby-config.js`](https://github.com/raffazizzi/gastby-ceteicean-workshop/blob/main/gatsby-config.js) and [`applyxst.js`](https://github.com/raffazizzi/gastby-ceteicean-workshop/blob/main/scripts/applyxslt.js)