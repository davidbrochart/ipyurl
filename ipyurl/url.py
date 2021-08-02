#!/usr/bin/env python
# coding: utf-8

# Copyright (c) David Brochart.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

import asyncio

from ipywidgets import DOMWidget
from traitlets import Unicode, Bool
from ._frontend import module_name, module_version


class Url(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('UrlModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('UrlView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    toggle = Bool(False).tag(sync=True)
    url = Unicode().tag(sync=True)

    async def get_url(self):
        self.toggle = not self.toggle
        await wait_for_change(self, 'toggle')
        return self.url


def wait_for_change(widget, value):
    future = asyncio.Future()
    def get_value(change):
        future.set_result(change.new)
        widget.unobserve(get_value, value)
    widget.observe(get_value, value)
    return future
