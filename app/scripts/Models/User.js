import Backbone from 'backbone';

import settings from '../settings';

export default Backbone.Model.extend({
  urlRoot: `${settings.apiURL}user/${settings.appKey}`,
  idAttribute: '_id',
  defaults: {
    username: '',
    authToken: ''
  }
});
