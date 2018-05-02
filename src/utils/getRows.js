import { maxProfilePreviewItems, profilePreviewCols } from './constants';

export default (itemsLength) => {
  const maxItems = itemsLength > maxProfilePreviewItems ? maxProfilePreviewItems : itemsLength;

  return Math.ceil(maxItems / profilePreviewCols);
};
