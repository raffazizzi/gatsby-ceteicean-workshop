const SaxonJS = require("saxon-js")
const path = require("path")

/* 
obj = {
  original: string
  prefixed: string,
  elements: string[]
}
*/
const applyxslt = (obj, xsltPath) => {
  const newObj = Object.assign({}, obj)
  const {original} = newObj

  // SaxonJS API docs: https://www.saxonica.com/saxon-js/documentation2/index.html#!api
  const output = SaxonJS.transform({
    stylesheetFileName: path.join(__dirname, xsltPath),
    sourceText: original,
    destination: "serialized"
  })
  
  newObj.original = output.principalResult

  return newObj
}

exports.applyxslt = applyxslt