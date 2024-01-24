export const findContact = (name, contacts) => {
  const isExist = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (isExist) {
    alert(`${name} is already in contacts.`);
  }

  return isExist;
};
