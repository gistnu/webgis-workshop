Ext.namespace("Heron.options.map");
OpenLayers.ProxyHost = "geoproxy.php?url=";

// All Map settings
Heron.options.map.settings = {
    // Standard OpenLayers Map config settings
    projection: 'EPSG:3857',
    units: 'm',
    maxExtent: '-20026376.39, -20048966.10, 20026376.39, 20048966.10',
    center: '11153595.621088,1890994.752004',
    maxResolution: '156543.0339', //'0.17578125',
    xy_precision: 5,
    zoom: 13
};

// All Layers
Heron.options.map.layers = [
    //basemap layers
    new OpenLayers.Layer.OSM(
        "openlayer"
    ),

    // Over layers 
    new OpenLayers.Layer.WMS(
        "จังหวัด",
        "http://map.nu.ac.th/gs-alr2/ows?", 
			{ layers: "alr:ln9p_prov", format: "image/png", transparent: true }, {
            isBaseLayer: false,
            singleTile: true,
            visibility: true,
            alpha: true,
            featureInfoFormat: "application/vnd.ogc.gml",
            transitionEffect: 'resize'
        }
    ),
    new OpenLayers.Layer.WMS(
        "อำเภอ",
        "http://map.nu.ac.th/gs-alr2/ows?", 
		{ layers: "alr:ln9p_amp", format: "image/png", transparent: true }, {
            isBaseLayer: false,
            singleTile: true,
            visibility: true,
            alpha: true,
            featureInfoFormat: "application/vnd.ogc.gml",
            transitionEffect: 'resize'
        }
    ),
    new OpenLayers.Layer.WMS(
        "ถนน",
        "http://map.nu.ac.th/gs-alr/ows?", 
		{ layers: "alr:ln9p_road", format: "image/png", transparent: true }, {
            isBaseLayer: false,
            singleTile: true,
            visibility: true,
            alpha: true,
            featureInfoFormat: "application/vnd.ogc.gml",
            transitionEffect: 'resize'
        }
    ),
    new OpenLayers.Layer.WMS(
        "หมู่บ้าน",
        "http://map.nu.ac.th/gs-alr2/ows?", 
		{ layers: "alr:ln9p_vill", format: "image/png", transparent: true }, {
            isBaseLayer: false,
            singleTile: true,
            visibility: true,
            alpha: true,
            featureInfoFormat: "application/vnd.ogc.gml",
            transitionEffect: 'resize'
        }
    ),

];

Heron.options.map.toolbar = [
    {type: "featureinfo", options: {
         popupWindow: {
             width: 360,
             height: 200,
             featureInfoPanel: {
                showTopToolbar: true,
                displayPanels: ['Detail','Table'],

                 exportFormats: ['CSV', 'XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'Shapefile'],

                 maxFeatures: 10,

                 discardStylesForDups: true
             }
         }
     }},

    { type: "pan" },
    { type: "zoomin" },
    { type: "zoomout" },
    { type: "zoomvisible" },
    { type: "-" },
    { type: "zoomprevious" },
    { type: "zoomnext" }
];


Ext.namespace("Heron.options.layertree");
Heron.options.layertree.tree = [

    {
        text: 'สาธารณูปโภค',
        expanded: true,
        children: [
            { nodeType: "gx_layer", layer: "ถนน" }
        ]
    }, {
        text: 'ขอบเขตการปกครอง',
        expanded: true,
        children: [
            { nodeType: "gx_layer", layer: "จังหวัด", legend: true},
            { nodeType: "gx_layer", layer: "อำเภอ", legend: true },
            { nodeType: "gx_layer", layer: "หมู่บ้าน", legend: true }
        ]
    }, {
        text: 'Basemap',
        expanded: true,
        children: [
            { nodeType: "gx_layer", layer: "openlayer", text: "Open Street Map" }
        ]
    }
];

Ext.namespace("Heron.options.bookmarks");
Heron.options.bookmarks = [{
    id: 'id1',
    name: 'นครไทย',
    desc: 'อำเภอนครไทย',
    layers: ['อำเภอ'],
    x: 11224510.074079,
    y: 1931678.360309,
    zoom: 13
}, {
    id: 'id2',
    name: 'มน.',
    desc: 'มหาวิทยาลัยนเรศวร',
    layers: ['อำเภอ'],
    x: 11153545.459288,
    y: 1890961.310804,
    zoom: 14
}];
