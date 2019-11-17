import { html } from '../libs.js';

// All the possible image variations in S3
const imageSizeVariations = [100, 320, 640, 1024, 1280];

const SnapshotImage = ({ date, placeName, image, ...rest }) => {
  const props = {
    alt: `Bilde fra ${placeName}`,
    ...rest
  };

  props.src = `${image}/${imageSizeVariations[3]}_r`;
  props.srcSet = imageSizeVariations.map(size => `${image}/${size}_r ${size}w`).join(', ');

  return html`
    <img ...${props} />
  `;
};

export default SnapshotImage;
