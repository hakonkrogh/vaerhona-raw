import { Preact, html } from '../../libs.js';

import Layout from '../../cmp/layout.js';
import { query } from '../../utils/graphql.js';
import PlacePreview from '../../cmp/place-preview/index.js';

import { List, ListItem, Loading } from './style.js';

export default class Home extends Preact.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const {
      data: { places }
    } = await query(`
      {
        places {
          name
          lastSnapshot {
            cuid
            date
            placeName
            temperature
            pressure
            humidity
            image
          }
        }
      }
    `);

    this.setState({
      loading: false,
      places
    });
  }

  render(_, { loading, places }) {
    return html`
      <${Layout}>
        ${loading &&
          html`
            <${Loading}>
              Hold on. Fetching preview of places...
            <//>
          `}
        ${places &&
          html`
            <${List}>
              ${places.map(
                place =>
                  html`
                    <${ListItem}>
                      <${PlacePreview} ...${place} />
                    <//>
                  `
              )}
            <//>
          `}
      <//>
    `;
  }
}
