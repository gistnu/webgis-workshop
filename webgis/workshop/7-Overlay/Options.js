Ext.namespace("Heron.options.map");

// All Map settings
Heron.options.map.settings = {
    // Standard OpenLayers Map config settings
    projection: 'EPSG:3857',
    units: 'm',
    maxExtent: '-20026376.39, -20048966.10, 20026376.39, 20048966.10',
    center: '11153595.621088,1890994.752004',
    xy_precision: 3,
    max_features: 10,
    zoom: 13
};

// All Layers
Heron.options.map.layers = [
    new OpenLayers.Layer.OSM(
            "openlayer"
    )
 ];

Heron.options.map.toolbar = [
    {type: "pan"},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"}
];
