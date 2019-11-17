// import * as Preact from 'https://unpkg.com/preact@10.0.4?module';
// import Router from 'https://unpkg.com/preact-router@3.1.0?module';
// import htm from 'https://unpkg.com/htm@2.2.1?module';
// import Picostyle from 'https://unpkg.com/picostyle@2.2.0?module';

import htm from './lib/htm@2.2.1.js';
import Picostyle from './lib/picostyle@2.2.0.js';
import * as P from './lib/preact@10.0.4.js';

export { default as Router } from './lib/preact-router@3.1.0.js';

export const Preact = P;
export const html = htm.bind(P.h);
export const ps = Picostyle(P.h);
