Ext.namespace("Heron");
Heron.layout = {
    
	layout:'border',
            defaults: {
               collapsible: true,
               split: true,
               //bodyStyle: 'padding:15px'
            },
            items: [{
				title: 'Panel1',
				region:'west',
				html: 'This is Panel 1',
				layout : 'accordion' ,
				width : 600,
				items : [{
					   title : 'Panel 1',
					   xtype: 'hr_htmlpanel',
					   html : 'layer tree'
					},{
					   title : 'Panel 2',
					   html : 'Legend'
					}]
            },{
               title: 'Panel2',
			   xtype: 'hr_mappanel',
			   hropts: Heron.options.map,
               region:'center',
               //html: 'This is Panel 2'
            },{
               title: 'Panel3',
               region: 'south',
               html: 'This is Panel 3'
            },{
               title: 'Panel4',
               region: 'east',
               html: 'This is Panel 4'
            },{
               title: 'Panel5',
               region: 'north',
               html: 'This is Panel 5'
            }]
};
