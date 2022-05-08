{
    "name": " Jerusalem Backend Theme",
    "summary": "Backend theme for Odoo 15 Enterprise",
    "description": """Jerusalem Backend Theme, Enterprise Backend Theme, V15 Theme""",
    "category": "Themes/Backend",
    "version": "15.0.1.0.0",
    'author': 'KA_BGHD',

    "depends": ['base', 'web', 'mail','web_enterprise','purchase','project','hr'],

    "data": [
        'security/ir.model.access.csv',
        #'i18n/ar_SY.po',
        'views/custom_views/purchase_order.xml',
        # 'views/custom_views/project.xml',
        'views/custom_views/res_config_settings_views.xml',
        'views/custom_views/employee.xml',
        'views/icons.xml',

    ],
    'assets': {
        'web.assets_backend': {
            '/theme_jerusalem/static/src/js/systray.js',
            '/theme_jerusalem/static/src/js/sidebar.js',
            '/theme_jerusalem/static/src/scss/font_icons.scss',
            '/theme_jerusalem/static/src/webclient/menus/menu_service.js',
            '/theme_jerusalem/static/src/scss/theme.scss',
            '/theme_jerusalem/static/src/scss/theme2.scss',
            '/theme_jerusalem/static/src/scss/sidebar.scss',
            '/theme_jerusalem/static/src/scss/kanban.scss',

            # "/theme_jerusalem/static/src/scss/datetimepicker.scss",
            "/theme_jerusalem/static/src/scss/form_.scss",
            # "/theme_jerusalem/static/src/scss/_dashlite_variables.scss",

            # "/theme_jerusalem/static/src/css/dashlite.css",
            '/theme_jerusalem/static/src/scss/menu-main.scss',

        },
        'web.assets_qweb': {
            '/theme_jerusalem/static/src/xml/top_bar.xml',
            '/theme_jerusalem/static/src/xml/systray.xml',
            '/theme_jerusalem/static/src/xml/sidebar.xml',
            '/theme_jerusalem/static/src/xml/activities.xml',

            # '/theme_jerusalem/static/src/xml/web_content.xml',


        },
        'web.assets_frontend': {
            "/theme_jerusalem/static/src/scss/login.scss",
        },

        # 'web.assets_common': [
        #     # ('prepend', 'jerusalm_backend_theme/static/src/css/dashlite.css'),
        #     # ('prepend', '/jerusalm_backend_theme/static/src/scss/theme.scss'),
        #     ('prepend', '/theme_jerusalem/static/src/scss/theme2.scss'),
        #     #('prepend', 'code_backend_theme_enterprise/static/src/scss/form.scss'),
        #
        # ],
    },

    'images': [

    ],
    'license': 'LGPL-3',
    'pre_init_hook': 'test_pre_init_hook',
    'post_init_hook': 'test_post_init_hook',
    'installable': True,
    'application': False,
    'auto_install': False,
}