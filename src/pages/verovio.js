import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Verovio = () => {

  const [svg, setSvg] = React.useState()

  React.useEffect(() => {
    // We load Verovio dynamically.
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
  }, []);

  const score = svg ? <div dangerouslySetInnerHTML={{__html: svg}}/> : ""

  return (
    <Layout location="home">
      <h1>Verovio test</h1>
      {score}
    </Layout>
  )
}

export default Verovio
