Ext.define('App.view.tablet.history.Browse', {
    extend: 'App.view.history.Browse',
    // xtype: 'historybrowse', -- set by profile

    requires: [
        'Ext.plugin.ListPaging'
    ],

    tbar: {
        xtype: 'historybrowsetoolbar'
    },

    items: [{
        xtype: 'grid',
        emptyText: '検索結果に該当する活動履歴がありません',
        bind: '{history}',
        ui: 'listing',

        selectable: {
            disabled: true
        },

        plugins: [{
            type: 'listpaging',
            autoPaging: true
        }],

        columns: [{
            dataIndex: 'type',
            align: 'center',
            width: 75,
            menuDisabled: true,
            hideable: false,
            sortable: false,
            resizable: false,
            cell: {
                cls: 'history-visual',
                encodeHtml: false
            },
            tpl: [
                '<span class="action action-{type} {type:actionIconCls}"></span>',
                '<div class="picture" style="background-image: url({recipient.picture})"></div>'
            ]
        }, {
            text: '名前 / 肩書',
            dataIndex: 'recipient.lastname',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<tpl for="recipient">',
                    '<a class="item-title" href="#{url}">{fullname}</a>',
                    '<div class="item-caption">{title}</div>',
                '</tpl>'
            ]
        }, {
            text: '組織',
            dataIndex: 'recipient.organization.name',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<tpl for="recipient.organization">',
                    '<a class="item-title" href="#{url}">{name}</a>',
                '</tpl>'
            ]
        }, {
            text: '事業所',
            dataIndex: 'recipient.office.name',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<tpl for="recipient.office">',
                    '<a class="item-title" href="#{url}">{name}</a>',
                    '<div class="item-caption">{city}, {country}</div>',
                '</tpl>'
            ]
        }, {
            xtype: 'datecolumn',
            dataIndex: 'created',
            format: 'Y-m-d H:i',
            text: '作成日',
            flex: 1
        }]
    }]
});
