Ext.define('App.view.person.ShowOrg', {
    extend: 'Ext.Panel',
    xtype: 'personshoworg',

    cls: 'person-org',
    iconCls: 'x-fa fa-sitemap',

    bind: {
        title:
            '<a href="#{record.organization.url}">'+
                '{record.organization.name}'+
            '</a>'+
            '<div class="caption">'+
                '上司： '+
                '<a href="#{record.organization.manager.url}">'+
                    '{record.organization.manager.fullname}'+
                '</a>'+
            '</div>'
    },

    header: {
        items: [{
            xtype: 'button',
            handler: 'onOrganizationHeadcountTap',
            iconCls: 'x-fa fa-users',
            ui: 'block',
            weigth: 10,
            bind: {
                text: '{record.organization.headcount}',
                tooltip: '<b>{record.organization.name}</b> オフィスの従業員を表示.'
            }
        }]
    },

    items: [{
        xtype: 'dataview',
        ui: 'thumbnails',
        minHeight: 80,
        inline: true,
        itemTpl: '<div class="thumbnail" style="background-image:url({picture})"></div>',
        bind: {
            emptyText: '{record.fullname} is the only employee in this organization',
            store: '{coworkers}'
        },
        listeners: {
            childtap: 'onPeopleChildTap'
        }
    }]
});
