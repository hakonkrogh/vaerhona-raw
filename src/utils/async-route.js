import { Preact, html, ps } from '../libs.js';

const Loader = ps('div')({
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center'
});

export default class AsyncRoute extends Preact.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.loadSrc();
  }

  async loadSrc() {
    const { src } = this.props;

    try {
      const cmp = await import(src);

      this.setState({
        loadedCmp: cmp.default
      });
    } catch (error) {
      this.setState({
        error
      });
    }
  }

  render({ src, ...rest }, { loadedCmp: LoadedCmp, error }) {
    if (LoadedCmp) {
      return html`
        <${LoadedCmp} ...${rest} />
      `;
    }

    if (error) {
      return `Oh no. I could not load ${src} =(`;
    }

    return html`
      <${Loader}>loading route...<//>
    `;
  }
}
