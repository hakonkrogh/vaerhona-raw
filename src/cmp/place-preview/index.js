import { html } from '../../libs.js';

import { prettyDateTime } from '../../utils/date.js';
import { Outer, Upper, PlaceName, Time, Image, SnapshotImage } from './style.js';

export default place => html`
  <${Outer}>
    <${Upper}>
      <${PlaceName}>${place.name}<//>
      <div>
        <${Time}>${prettyDateTime(place.lastSnapshot.date)}<//>
      <//>
    <//>
    <${Image}>
      <${SnapshotImage} ...${place.lastSnapshot} sizes="300px" />
    <//>
  <//>
`;
