import * as Contacts from 'expo-contacts';

const CONTACT = 'CONTACT';

const getPermission = async permissionTypes => {
  if (permissionTypes.indexOf(CONTACT) >= 0) {
    await Contacts.requestPermissionsAsync();
  }
};

export const getContacts = async () => {
  await getPermission([CONTACT]);
  const { data } = await Contacts.getContactsAsync({
    fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
  });

  return data;
};