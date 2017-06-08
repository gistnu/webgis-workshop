Ext.namespace("Heron");
Heron.layout = {
    xtype: 'panel',

    /* Optional ExtJS Panel properties here, like "border", see ExtJS API docs. */
    layout: 'border',
    border: true,

    /** Any classes in "items" and nested items are automatically instantiated (via "xtype") and added by ExtJS. */
    items: [
        {
            xtype: 'panel',
            layout: 'accordion',
            region: "west",
            width: 240,
            collapsible: true,
            border: false,
            items: [
                 {
                    xtype: 'hr_layertreepanel',
					title: 'layer',
                    //hropts: Heron.options.layertree
                },
                {
                    xtype: 'hr_htmlpanel',
                    html: 'Panel 2 - see <a href="Options.js">Options</a>'
                }
            ]
        },
        {
            xtype: 'panel',
            layout: 'border',
            region: 'center',
            width: '100%',
            collapsible: false,
            split: false,
            border: false,
            items: [
                {
                    xtype: 'hr_mappanel',
                    id: 'hr-map',
                    title: 'Workshop - Made with <a href="http://heron-mc.org">Heron</a>',
                    region: 'center',
                    collapsible: false,
                    border: false,
                    hropts: Heron.options.map
                }
            ]
        }
    ]
};
