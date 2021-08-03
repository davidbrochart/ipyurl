#!/usr/bin/env python
# coding: utf-8

# Copyright (c) David Brochart.
# Distributed under the terms of the Modified BSD License.

import pytest

from ..url import Url


def test_example_creation_blank():
    w = Url()
