import { maxRandomCollections } from "./constants";

export const discoveredCollections = {
  allCollections: [],
  discoveredIds: [],
};

export default () => {
  const { allCollections, discoveredIds } = discoveredCollections;
  const chosenCollections = [];

  while (chosenCollections.length < maxRandomCollections && discoveredIds.length < allCollections.length) {

    const num = Math.floor(Math.random() * allCollections.length);
    const { collection } = allCollections[num];
    const collectionId = collection._id;
    const isAlreadyChosen = chosenCollections.find(el => el.collection._id === collectionId);

    if (!isAlreadyChosen && !discoveredIds.includes(collectionId)) {
      chosenCollections.push(allCollections[num]);
      discoveredIds.push(collectionId);
    }
  }

  if (chosenCollections.length === 0) return;
  return chosenCollections;
};
