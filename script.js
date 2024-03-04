require([
      "esri/widgets/Sketch",
      "esri/Map",
      "esri/layers/GraphicsLayer",
      "esri/views/MapView",
      "esri/widgets/Home"
      
    ], (Sketch, Map, GraphicsLayer, MapView, Home) => {
      const graphicsLayer = new GraphicsLayer();
    

      let homeWidget = new Home({
   view: view
});

view.ui.add(homeWidget, "top-left");
    });