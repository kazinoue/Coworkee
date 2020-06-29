Ext.define('App.view.widgets.BrowseToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'personbrowsetoolbar',

    cls: 'browse-toolbar',
    weighted: true,
    ui: 'tools',

    defaults: {
        ui: 'action'
    },

    items: {
        search: {
            xtype: 'searchfield',
            reference: 'search',
            placeholder: '検索',
            userCls: 'expandable',
            bind: '{filters.search}',
            weight: 0
        },
        refresh: {
            iconCls: 'x-fa fa-refresh',
            handler: 'onRefreshTap',
            tooltip: '表示を更新',
            weight: 30
        },
        clear: {
            iconCls: 'x-fa fa-undo',
            handler: 'onClearFiltersTap',
            tooltip: 'フィルタをクリア',
            weight: 20
        }
    }
});
