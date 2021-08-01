// Copyright (c) David Brochart
// Distributed under the terms of the Modified BSD License.

import { ServerConnection } from '@jupyterlab/services';

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import { MODULE_NAME, MODULE_VERSION } from './version';

export class UrlModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: UrlModel.model_name,
      _model_module: UrlModel.model_module,
      _model_module_version: UrlModel.model_module_version,
      _view_name: UrlModel.view_name,
      _view_module: UrlModel.view_module,
      _view_module_version: UrlModel.view_module_version,
      toggle: false,
      url: '',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'UrlModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'UrlView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class UrlView extends DOMWidgetView {
  render() {
    this.toggle_changed();
    this.model.on('change:toggle', this.toggle_changed, this);
  }

  toggle_changed() {
    const settings = ServerConnection.makeSettings();
    this.model.set('url', settings.baseUrl);
    // notify the URL has been updated
    const toggle = this.model.get('toggle');
    this.model.set('toggle', !toggle);
    this.model.save_changes();
  }
}
