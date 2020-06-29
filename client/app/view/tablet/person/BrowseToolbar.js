Ext.define('App.view.tablet.person.BrowseToolbar', {
    extend: 'App.view.widgets.BrowseToolbar',
    // xtype: 'personbrowsetoolbar', -- set by profile

    items: {
        organizations: {
            xtype: 'combobox',
            valueField: 'value',
            displayField: 'label',
            placeholder: '組織で検索',
            queryMode: 'local',
            weight: 11,
            bind: {
                selection: '{filters.organization}',
                store: '{organizations}'
            }
        },
        offices: {
            xtype: 'combobox',
            valueField: 'value',
            displayField: 'label',
            placeholder: '従業員で検索',
            queryMode: 'local',
            weight: 10,
            bind: {
                selection: '{filters.office}',
                store: '{offices}'
            }
        },
        create: {
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            handler: 'onCreate',
            text: '作成',
            weight: 50
        }
    }
});
