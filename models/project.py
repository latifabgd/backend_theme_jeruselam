# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from collections import defaultdict

from odoo import models, fields, api, _, _lt
from odoo.exceptions import UserError, ValidationError, RedirectWarning

class Project(models.Model):
    _inherit = "project.project"

    name_w = fields.Char('first letters',compute="getFistLetters")

    def getFistLetters(self):
        for project in self:
            word = project.name
            F_letters = ""
            list_w = list(word.split(" "))
            for w in list_w:
                letters = list(w.split(""))
                F_letters+=letters[0]


