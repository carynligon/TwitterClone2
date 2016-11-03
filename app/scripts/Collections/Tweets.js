import Backbone from 'backbone';

import Tweet from '../Models/Tweet';

import settings from '../settings';

export default Backbone.Collection.extend({
  url: `${settings.apiURL}appdata/${settings.appKey}/tweets`,
  model: Tweet
});
