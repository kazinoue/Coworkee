Ext.define('App.view.office.ShowDetails', {
    extend: 'Ext.Panel',
    xtype: 'officeshowdetails',

    cls: 'office-details',
    title: '詳細情報',

    tpl: [
        '<div class="block-section">',
            '<div class="item">',
                '<div class="label">住所</div>',
                '<div class="value">',
                    '<div>{address}</div>',
                    '<tpl if="region || postcode">',
                        '<div>{city}, {region} {postcode}</div>',
                        '<div><b>{country}</b></div>',
                    '<tpl else>',
                        '<div>{city}, <b>{country}</b></div>',
                    '</tpl>',
                '</div>',
            '</div>',
        '</div>'
    ],

    bind: {
        record: '{record}'
    }
});
