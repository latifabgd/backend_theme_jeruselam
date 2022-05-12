# -*- coding: utf-8 -*-
{
    'name': "Login Design",

    'summary': """
        Login Pages For Odoo""",

    'description': """
        Login Pages For Odoo, it is free, free, free, important thing need to speek three times. ^_^, for more login style, please buy out anita login pro.
    """,

    'author': "Funenc Odoo Team",
    'website': "https://www.funenc.com/?fw=1",

    'category': 'Theme/Backend',
    'version': '15.0.0.1',
    'license': 'OPL-1',

    'depends': ['base'],

    'images': [
        'static/description/anita_description.png', 
        'static/description/anita_screenshot.png'
    ],

    'data': [
        "views/login_style1.xml",
        # "views/login_style2.xml",
        # "views/login_style3.xml",
        # "views/login_style4.xml"
    ],

    'assets': {
        'web.assets_backend': [],
        'web.assets_qweb': [],
        'web.assets_frontend': {
            '/login_design/static/scss/font_icons.scss',
            "/login_design/static/css/login/login_slider.scss",



        },
    }
}
