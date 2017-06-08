Ext.namespace("Heron.options.map");

    /* Below are Heron-specific settings for the MapPanel (xtype: 'hr_mappanel') */
    Heron.options.settings = {
            // ค้นจาก https://epsg.io/3857
            projection: 'EPSG:3857',
            units: 'm',
            maxExtent: '-20026376.39, -20048966.10, 20026376.39, 20048966.10',
            center: '11153595.621088,1890994.752004',
            xy_precision: 3,
            max_features: 10,
            zoom: 13,
            /* controls: [
                new OpenLayers.Control.Attribution(),
                new OpenLayers.Control.Zoom(),
                new OpenLayers.Control.Navigation({ dragPanOptions: { enableKinetic: true } })
            ] */
        };

    Heron.options.layers = [
            new OpenLayers.Layer.OSM()
        ];

	
	
Heron.options.map ={
	settings: Heron.options.settings,
	layers: Heron.options.layers
}