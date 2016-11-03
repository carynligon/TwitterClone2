import Backbone from 'backbone';

import User from '../Models/User';

import settings from '../settings';

export default Backbone.Collection.extend({
  url: `${settings.apiURL}user/${settings.appKey}`,
  model: User
});
