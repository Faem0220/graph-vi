import "./styles.css";
import cytoscape from "cytoscape";

const graphData = require("./graph.json");
var cy = cytoscape({
  container: document.getElementById("cy"), // container to render in

  elements: graphData,

  style: [
    // the stylesheet for the graph
    {
      selector: "node",
      style: {
        "background-color": "#3af",
        label: "data(id)",
        "font-family": "monospace"
      }
    },

    {
      selector: "edge",
      style: {
        width: 2,
        "line-color": "#ccc",
        "target-arrow-color": "#922",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
        "font-family": "monospace",
        color: "#822",
        label: "data(weight)"
      }
    }
  ],

  layout: {
    name: "breadthfirst"
  }
});
