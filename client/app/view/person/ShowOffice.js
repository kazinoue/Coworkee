Ext.define('App.view.person.ShowOffice', {
    extend: 'Ext.Panel',
    xtype: 'personshowoffice',

    cls: 'person-office',
    iconCls: 'x-fa fa-globe',

    bind: {
        title:
            '<a href="#{record.office.url}">'+
                '{record.office.name}'+
            '</a>'+
            '<div class="caption">'+
                '{record.office.city}, '+
                '{record.office.country}'+
            '</div>'
    },

    header: {
        items: [{
            xtype: 'button',
            handler: 'onOfficeHeadcountTap',
            iconCls: 'x-fa fa-users',
            ui: 'block',
            weigth: 10,
            bind: {
                text: '{record.office.headcount}',
                tooltip: '<b>{record.office.name} オフィスの従業員を表示</b> office.'
            }
        }],
    },

    items: [{
        xtype: 'mapview',
        bind: {
            markers: '{record.office}'
        }
    }]
});
