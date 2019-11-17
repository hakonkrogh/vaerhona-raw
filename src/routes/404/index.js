import { html } from '../../libs.js';
import Layout from '../../cmp/layout.js';
import { Outer } from './style.js';

export default ({ url }) =>
  html`
    <${Layout}>
      <${Outer}>This page (${url}) does not exist<//>
    <//>
  `;
