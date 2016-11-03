import Backbone from 'backbone';

import settings from '../settings';

export default Backbone.Model.extend({
  urlRoot: `${setting.appURL}appdata/${settings.appKey}/Tweets`
});
