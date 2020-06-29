Ext.define('App.view.home.HomeEvents', {
    extend: 'Ext.Panel',
    xtype: 'homeevents',

    cls: 'home-events',

    tbar: {
        layout: {
            pack: 'center'
        },

        items: [{
            xtype: 'segmentedbutton',
            defaultUI: 'segmented flat',
            bind: '{range}',
            items: [{
                text: '今後の予定',
                value: 'upcoming'
            }, {
                text: '最近の予定',
                value: 'recent'
            }, {
                text: '過去の予定',
                value: 'past'
            }]
        }]
    },

    items: [{
        xtype: 'dataview',
        bind: '{events}',
        minHeight: 80,
        inline: true,
        ui: 'light',

        selectable: {
            disabled: true
        },

        itemTpl: [
            '<div class="event-header type-{type}">',
                '<div class="date">{date:date("M j")}</div>',
                '<div class="title">',
                    '<tpl switch="type">',
                    '<tpl case="birthday">誕生日',
                    '<tpl case="anniversary">入社周年',
                    '<tpl case="started">入社日',
                    '<tpl case="ended">退職日',
                    '</tpl>',
                '</div>',
            '</div>',
            '<div class="event-content">',  
                '<div class="picture large" style="background-image:url({person.picture})"></div>',
                '<div class="details">',
                    '<div class="person-name">{person.fullname}</div>',
                    '<div class="person-title">{person.title}</div>',
                    '<div class="person-years">',
                        '<tpl switch="type">',
                        '<tpl case="birthday">{person.birthday:dateDiff(values.date, "y")} old',
                        '<tpl case="anniversary">{person.started:dateDiff(values.date, "y")} ',
                        '<tpl default>&nbsp;',
                        '</tpl>',
                    '</div>',
                '</div>',
            '</div>'
        ],

        listeners: {
            childtap: 'onEventChildTap'
        }
    }]
});
