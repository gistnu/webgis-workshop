Ext.namespace("Heron");
Heron.layout = {
    xtype: 'panel',

    layout: 'border',
    border: true,

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
                    hropts: Heron.options.layertree
                },

                {
                    xtype: 'hr_bookmarkspanel',
                    hropts: Heron.options.bookmarks
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
