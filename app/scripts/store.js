import Session from './Models/Session';

import Tweets from './Collections/Tweets';

export default {
  session: new Session(),
  tweets: new Tweets()
}
