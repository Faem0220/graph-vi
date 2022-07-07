import "./styles.css";
import cytoscape from "cytoscape";

var cy = cytoscape({
  container: document.getElementById("cy"), // container to render in

  elements: [
    // list of graph elements to start with
    {
      // node a
      data: { id: "a", address: "0x5C9a" }
    },
    {
      // node b
      data: { id: "b", address: "0x81adf" }
    },
    {
      // node a
      data: { id: "c", address: "0x23d2a" },
      style: {
        width: 70,
        height: 70
      }
    },
    {
      // node b
      data: { id: "d", address: "0x2260" }
    },
    {
      // edge ab
      data: { id: "ba", source: "a", target: "b", weight: 0.2 }
    },
    {
      // edge ab
      data: { id: "ab", source: "a", target: "c" }
    }
  ],

  style: [
    // the stylesheet for the graph
    {
      selector: "node",
      style: {
        "background-color": "#266",
        label: "data(address)"
      }
    },

    {
      selector: "edge",
      style: {
        width: 3,
        "line-color": "#ccc",
        "target-arrow-color": "#ccc",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
        label: "data(weight)"
      }
    }
  ],

  layout: {
    name: "random",
  }
});
