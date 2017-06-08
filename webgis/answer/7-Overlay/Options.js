Ext.namespace("Heron.options.map");

// All Map settings
Heron.options.map.settings = {
    // Standard OpenLayers Map config settings
    projection: 'EPSG:3857',
    units: 'm',
    maxExtent: '-20026376.39, -20048966.10, 20026376.39, 20048966.10',
    center: '11153595.621088,1890994.752004',
	maxResolution:'156543',
    xy_precision: 3,
    max_features: 10,
    zoom: 13
};

// All Layers
Heron.options.map.layers = [
	// base map
    new OpenLayers.Layer.OSM(
		"openlayer"
	),
	
	new OpenLayers.Layer.Google(		
		"Google Satellite",		
		{			
			type: google.maps.MapTypeId.SATELLITE, 			
			visibility: true
		},{			
			singleTile: false, 			
			buffer: 0, 			
			isBaseLayer: true		
		}	
	),




	
	// overlay layers
	new OpenLayers.Layer.WMS(
		"จังหวัด",
		"http://localhost:8080/geoserver/ows?",
		{
			layers:"alr:ln9p_prov",
			transparent: true,
			format: "image/png"
		},{
			isBaseLayer: false,
			visibility: true,
			singleTile: true
		}		
	),
	
	new OpenLayers.Layer.WMS(
		"อำเภอ",
		"http://localhost:8080/geoserver/ows?",
		{
			layers:"alr:ln9p_amp",
			transparent: true,
			format: "image/png"
		},{
			isBaseLayer: false,
			visibility: true,
			singleTile: true
		}		
	),
	
	new OpenLayers.Layer.WMS(
		"gdem_utmth3",
		"http://localhost:8080/geoserver/gwc/service/wms?",
		{
			layers: "alrmap:gdem_utmth3", 
			transparent: true,
			format: "image/png"
		},{
			isBaseLayer: false,
			visibility: true,
			singleTile: true
		}		
	),
	
	new OpenLayers.Layer.WMS(
		"ถนน",
		"http://localhost:8080/geoserver/ows?",
		{
			layers:"alr:ln9p_road",
			transparent: true,
			format: "image/png"
		},{
			isBaseLayer: false,
			visibility: true,
			singleTile: true
		}		
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

Ext.namespace("Heron.options.layertree");
Heron.options.layertree.tree = [
//{text: 'Basemap',},{text: 'ขอบเขตการปกครอง',},{text: 'สาธารณูปโภค',}
	 {
		text: 'Basemap',
		expanded: true,
		children:[
			{nodeType: "gx_layer", layer: "openlayer"},
			{nodeType: "gx_layer", layer: "Google Satellite"}
		]
	},{
		text: 'ขอบเขตการปกครอง',
		expanded: true,
		children:[
			{nodeType: "gx_layer", layer: "จังหวัด", legend: true},
			{nodeType: "gx_layer", layer: "อำเภอ", legend: true},
			{nodeType: "gx_layer", layer: "gdem_utmth3", legend: true}
		]
	},{
		text: 'สาธารณูปโภค',
		expanded: true,
		children:[
			{nodeType: "gx_layer", layer: "ถนน", legend: true}
		]
	} 
]
