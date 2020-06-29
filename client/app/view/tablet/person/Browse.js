Ext.define('App.view.tablet.person.Browse', {
    extend: 'App.view.person.Browse',
    // xtype: 'personbrowse', -- set by profile

    requires: [
        'Ext.plugin.ListPaging'
    ],

    controller: 'tablet-personbrowse',

    tbar: {
        xtype: 'personbrowsetoolbar'
    },

    items: [{
        xtype: 'grid',
        emptyText: 'No employee was found to match your search',
        bind: '{people}',
        ui: 'listing',

        selectable: {
            disabled: true
        },

        plugins: [{
            type: 'listpaging',
            autoPaging: true
        }],

        columnMenu: {
            items: {
                groupByThis: false,
                showInGroups: false
            }
        },

        columns: [{
            dataIndex: 'picture',
            menuDisabled: true,
            hideable: false,
            sortable: false,
            resizable: false,
            align: 'center',
            width: 58,
            cell: {
                encodeHtml: false
            },
            tpl: '<div class="picture" style="background-image: url({picture})"></div>'
        }, {
            text: '氏名 / 肩書',
            dataIndex: 'lastname',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<a class="item-title" href="#{url}">{fullname}</a>',
                '<div class="item-caption">{title}</div>'
            ]
        }, {
            text: '組織',
            dataIndex: 'organization.name',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<tpl for="organization">',
                    '<a class="item-title" href="#{url}">{name}</a>',
                    '<div class="item-caption">',
                        '上司： <a href="#{manager.url}">{manager.fullname}</a>',
                    '</div>',
                '</tpl>'
            ]
        }, {
            text: '事業所',
            dataIndex: 'office.name',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<tpl for="office">',
                    '<a class="item-title" href="#{url}">{name}</a>',
                    '<div class="item-caption">{city}, {country}</div>',
                '</tpl>'
            ]
        }, {
            sortable: false,
            dataIndex: 'email',
            text: 'メール/電話番号',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<div class="item-info"><span class="x-fa fa-envelope-o"></span> {email}</div>',
                '<div class="item-info"><span class="x-fa fa-phone"></span> {phone}</div>'
            ]
        }],

        listeners: {
            childdoubletap: 'onChildActivate'
        }
    }]
});
