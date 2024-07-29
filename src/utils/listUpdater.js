export const updateWithoutDuplicates = (newItem, oldList) => {
  const repeatedLocation = oldList.find(listItem => listItem.id === newItem.id);

  if (repeatedLocation) {
    return oldList.map(listItem =>
      listItem.id === newItem.id ? newItem : listItem
    );
  } else {
    return [newItem, ...oldList];
  }
};
