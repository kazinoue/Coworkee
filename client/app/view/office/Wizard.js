Ext.define('App.view.office.Wizard', {
    extend: 'App.view.widgets.Wizard',
    xtype: [
        'officewizard',
        'officecreate',
        'officeedit'
    ],

    bind: {
        title: '{record.phantom? "Add" : "Edit"} Office'
    },

    screens: [{
        title: 'General',
        iconCls: 'x-fa fa-info',
        items: [{
            xtype: 'textfield',
            reference: 'name',
            label: '事業所名',
            required: true,
            bind: '{record.name}'
        }, {
            xtype: 'textfield',
            reference: 'address',
            label: '住所',
            required: true,
            bind: '{record.address}'
        }, {
            xtype: 'textfield',
            reference: 'city',
            label: '市区町村名',
            required: true,
            bind: '{record.city}'
        }, {
            xtype: 'textfield',
            reference: 'postcode',
            label: '郵便番号',
            bind: '{record.postcode}'
        }, {
            xtype: 'textfield',
            reference: 'country',
            label: '国名',
            required: true,
            bind: '{record.country}'
        }, {
            xtype: 'textfield',
            reference: 'region',
            label: '都道府県名',
            bind: '{record.region}'
        }]
    }]
});
