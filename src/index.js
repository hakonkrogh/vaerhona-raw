import { Preact, Router, html } from './libs.js';

import AsyncRoute from './utils/async-route.js';

Preact.render(
  html`
    <${Router}>
      <${AsyncRoute} path="/" src="/src/routes/home/index.js" />
      <${AsyncRoute} src="/src/routes/404/index.js" default />
    <//>
  `,
  document.querySelector('#app')
);

// Remove loading screen
const loader = document.querySelector('#app-loading');
loader.parentElement.removeChild(loader);
