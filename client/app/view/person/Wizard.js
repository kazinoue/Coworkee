Ext.define('App.view.person.Wizard', {
    extend: 'App.view.widgets.Wizard',
    xtype: [
        'personwizard',
        'personcreate',
        'personedit'
    ],

    controller: {
        type: 'personwizard'
    },

    viewModel: {
        type: 'personwizard'
    },

    bind: {
        title: '従業員情報{record.phantom? "追加" : "編集"} '
    },

    cls: 'person-create',

    screens: [{
        title: '一般情報',
        iconCls: 'x-fa fa-info',
        items: [{
            xtype: 'textfield',
            reference: 'lastname',
            label: '姓',
            required: true,
            bind: '{record.lastname}',
            listeners: {
                blur: 'onNameFieldsBlur'
            }
        }, {
            xtype: 'textfield',
            reference: 'firstname',
            label: '名',
            required: true,
            bind: '{record.firstname}',
            listeners: {
                blur: 'onNameFieldsBlur'
            }
        }, {
            xtype: 'textfield',
            reference: 'username',
            label: 'ユーザー名',
            required: true,
            bind: '{record.username}',
            listeners: {
                change: 'onUsernameChange'
            }
        }, {
            xtype: 'passwordfield',
            reference: 'password',
            label: 'パスワード',
            required: true,
            bind: {
                required: '{record.phantom}',
                placeholder: '{record.phantom? "" : "Keep password unchanged"}',
                value: '{record.password}'
            }
        }, {
            xtype: 'passwordfield',
            reference: 'password_check',
            label: 'パスワード（確認）',
            disabled: true,
            validators: {
                type: 'controller',
                fn: 'doPasswordMatch'
            },
            bind: {
                required: '{record.phantom}',
                disabled: '{!password.value}'
            }
        }]
    }, {
        title: '誕生日、連絡先',
        iconCls: 'x-fa fa-home',
        items: [{
            xtype: 'datepickerfield',
            reference: 'birthday',
            label: '誕生日',
            required: true,
            bind: '{record.birthday}'
        }, {
            xtype: 'emailfield',
            reference: 'email',
            label: 'メールアドレス',
            required: true,
            bind: '{record.email}'
        }, {
            xtype: 'textfield',
            reference: 'phone',
            label: '電話番号',
            required: true,
            bind: '{record.phone}'
        }, {
            xtype: 'textfield',
            reference: 'skype',
            label: 'Skype',
            bind: '{record.skype}'
        }, {
            xtype: 'textfield',
            reference: 'linkedin',
            label: 'LinkedIn',
            bind: '{record.linkedin}'
        }]
    }, {
        title: '人事情報',  
        iconCls: 'x-fa fa-sitemap',
        items: [{
            xtype: 'textfield',
            reference: 'title',
            label: '肩書',
            required: true,
            bind: '{record.title}'
        }, {
            xtype: 'datepickerfield',
            reference: 'started',
            label: '入社日',
            required: true,
            bind: '{record.started}'
        }, {
            xtype: 'datepickerfield',
            reference: 'ended',
            label: '退職日',
            bind: '{record.ended}'
        }, {
            xtype: 'combobox',
            label: '事業所',
            displayField: 'label',
            valueField: 'value',
            queryMode: 'local',
            forceSelection: true,
            required: true,
            bind: {
                value: '{record.office_id}',
                store: '{offices}'
            }
        }, {
            xtype: 'combobox',
            label: '組織',
            displayField: 'label',
            valueField: 'value',
            queryMode: 'local',
            forceSelection: true,
            required: true,
            bind: {
                value: '{record.organization_id}',
                store: '{organizations}'
            }
        }]
    }]
});
