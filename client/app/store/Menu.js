Ext.define('App.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',

    data: [{
        id: 'home',
        xtype: 'home',
        text: 'ホーム',
        icon: 'home'
    }, {
        id: 'people',
        xtype: 'personbrowse',
        text: '従業員一覧',
        icon: 'users'
    }, {
        id: 'organizations',
        xtype: 'organizationbrowse',
        text: '組織一覧',
        icon: 'sitemap'
    }, {
        id: 'offices',
        xtype: 'officebrowse',
        text: 'オフィス拠点',
        icon: 'globe'
    }, {
        id: 'history',
        xtype: 'historybrowse',
        text: 'アクティビティ',
        icon: 'history'
    }]
});
