Ext.define('App.view.organization.ShowPeople', {
    extend: 'Ext.Panel',
    xtype: 'organizationshowpeople',

    cls: 'organization-people',
    iconCls: 'x-fa fa-users',
    title: '従業員',

    header: {
        items: [{
            xtype: 'button',
            handler: 'onPeopleHeadcountTap',
            iconCls: 'x-fa fa-users',
            ui: 'block',
            weigth: 10,
            bind: {
                text: '{record.headcount}',
                tooltip: '<b>{record.name}</b> 部門のスタッフを表示.'
            }
        }]
    },

    items: [{
        xtype: 'dataview',
        bind: '{people}',
        ui: 'thumbnails',
        minHeight: 80,
        inline: true,
        emptyText: '組織にはスタッフが割り当てられていません',
        itemTpl: '<div class="thumbnail" style="background-image:url({picture})"></div>',
        listeners: {
            childtap: 'onPeopleChildTap'
        }
    }]
});
