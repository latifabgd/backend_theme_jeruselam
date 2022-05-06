/** @odoo-module **/

import SystrayMenu from 'web.SystrayMenu';
import Widget from 'web.Widget';
import Session from 'web.session';


var ThemeWidget = Widget.extend({
    template: 'theme_systray',
    events: {
        'click #theme_vista': '_onClick',
    },
    is_admin: false,
    willStart: function () {
            this.is_admin = Session.is_admin;
            return this._super.apply(this, arguments);
    },

});
SystrayMenu.Items.push(ThemeWidget);
export default ThemeWidget;

ThemeWidget.include({
    init: function () {
        this._super.apply(this, arguments);
        var self = this;
        var session = this.getSession();
        var lang_list = '';
        var selected_lang = '';
        selected_lang = '<img class="flag" src="theme_jerusalem/static/src/img/flags/' + session.user_context.lang + '.png" alt="lang" class="rounded-circle"/>';

        self._rpc({
            model: 'res.lang',
            method: 'search_read',
            domain: [],
            fields: ['name', 'code'],
            lazy: false,
        }).then(function (res) {
            _.each(res, function (lang) {
                var a = '';
//                if (lang['code'] === session.user_context.lang) {
//                    a = '<img class="flag" src="theme_jerusalem/static/src/img/flags/' + lang['code'] + '.png" alt="lang" class="rounded-circle"/>';
//                } else {
//                    a = '';
//                }
                lang_list += '<li class="language-item"><a href="#" class="dropdown-item" data-lang-menu="lang" data-lang-id="' + lang['code'] + '"><img class="flag" src="theme_jerusalem/static/src/img/flags/' + lang['code'] + '.png"/>' + ' ' + lang['name'] + '</a></li>';
            });

            self.$('selected-lang').replaceWith(selected_lang);
            self.$('switch-lang').replaceWith(lang_list);
        })
    },
    start: function () {
        var self = this;
        return this._super.apply(this, arguments).then(function () {
            self.$el.on('click', 'a[data-lang-menu]', function (ev) {
                ev.preventDefault();
                var f = self['_onMenuLang']
                f.call(self, $(this));
            });
        });
    },
    _onMenuLang: function (ev) {
        var self = this;
        var lang = ($(ev).data("lang-id"));
        var session = this.getSession();
        return this._rpc({
            model: 'res.users',
            method: 'write',
            args: [session.uid, {'lang': lang}],
        }).then(function (result) {
            self.do_action({
                type: 'ir.actions.client',
                res_model: 'res.users',
                tag: 'reload_context',
                target: 'current',
            });
        });
    },
})


