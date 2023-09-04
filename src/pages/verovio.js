import React from "react"
import Layout from "../components/layout"
import Popup from "../components/popup"
import "./verovio.css"

const Verovio = () => {

  // This state keeps track of the SVG rendered by Verovio
  const [svg, setSvg] = React.useState()
  // This state indicates whether we need to show a popup or not
  const [showPopup, setShowPopup] = React.useState(false)
  // This state hold data to show in a popup
  const [popupData, setPopupData] = React.useState()
  // This will let us access the SVG DOM once it's available.
  const verRef = React.useRef()

  React.useEffect(() => {
    // We load Verovio dynamically. useEffect() runs after rendering
    const script = document.createElement("script");
    script.type = "application/javascript";
    script.src =
      "https://www.verovio.org/javascript/latest/verovio-toolkit-wasm.js";
    document.body.appendChild(script);

    const verovioHandler = () => {
      window.verovio.module.onRuntimeInitialized = async _ => {
        const tk = new window.verovio.toolkit()
        fetch("https://www.verovio.org/examples/downloads/Schubert_Lindenbaum.mei")
          .then((response) => response.text())
          .then((meiXML) => {
            tk.setOptions({
              scale: 30,
              landscape: true,
              adjustPageWidth: true
            });
            setSvg(tk.renderData(meiXML, {}));
          });
      }
    }

    script.defer = true;
    script.addEventListener("load", verovioHandler);
    // Event handlers should always be removed.
    return () => {
      script.removeEventListener("load", verovioHandler);
    }
  }, []) // [] is used to run this once.

  // useLayoutEffect runs after changes to the HTML DOM. We use it to interact with the SVG DOM once it's loaded
  React.useLayoutEffect(() => {
    // This is give us access to the Verovio SVG DOM to add interactivity.
    // A more "reacty" way of handling this would require routing SVG elements of note to React components
    // (Like what we do with TEI). 
    if (verRef.current) {
      const notation = verRef.current;
      notation.querySelectorAll('g.beam').forEach(function (chord) {
        chord.addEventListener("click", (event) => {
          // We adjust the state to show a popup.
          setPopupData({
            title: "Info",
            toggle: () => {setShowPopup(false)},
            content: "You clicked on some beamed notes!"
          })
          setShowPopup(true)
        });
      })
    }
  }, [svg]) // this will run every time the svg state changes.

  const score = svg 
    ? <div dangerouslySetInnerHTML={{__html: svg}} ref={verRef}/> : "Loading Verovio..."

  const popup = showPopup ? <Popup {...popupData} >{popupData.content}</Popup> : null

  return (
    <Layout location="home">
      <h1>Verovio example</h1>
      {score}
      {popup}
    </Layout>
  )
}

export default Verovio
