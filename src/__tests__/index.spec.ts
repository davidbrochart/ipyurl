// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

// Add any needed widget imports here (or from controls)
// import {} from '@jupyter-widgets/base';

import { createTestModel } from './utils';

import { UrlModel } from '..';

describe('Url', () => {
  describe('UrlModel', () => {
    it('should be createable', () => {
      const model = createTestModel(UrlModel);
      expect(model).toBeInstanceOf(UrlModel);
    });
  });
});
