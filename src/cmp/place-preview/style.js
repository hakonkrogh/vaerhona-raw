import { ps } from '../../libs.js';

import SI from '../snapshot-image.js';

export const Outer = ps('div')({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1.2rem',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',
  background: '#fafafa',
  borderRadius: '15px',
  overflow: 'hidden',
  color: 'inherit',
  textDecoration: 'none',
  height: '300px',
  width: '300px'
});

export const Upper = ps('div')({
  flex: '0 0 auto',
  margin: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const PlaceName = ps('div')({
  fontWeight: 'normal',
  fontSize: '1.2rem',
  margin: '0',
  flex: '1 1 auto',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  '::first-letter': {
    textTransform: 'uppercase'
  }
});

export const Time = ps('time')({
  flex: '0 0 auto',
  marginLeft: '15px',
  whiteSpace: 'nowrap'
});

export const Image = ps('div')({
  flex: '1 1 auto',
  display: 'block',
  margin: '0',
  position: 'relative'
});

export const SnapshotImage = ps(SI)({
  position: 'absolute',
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  display: 'block',
  background: '#ccc'
});
