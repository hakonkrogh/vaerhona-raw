import { ps } from '../../libs.js';

export const List = ps('ul')({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: '0px',
  padding: '0px 0px 100px',
  listStyle: 'none'
});

export const ListItem = ps('li')({
  position: 'relative',
  margin: '30px',
  padding: '0px'
});

export const Loading = ps('div')({
  textAlign: 'center',
  marginTop: '100px'
});
