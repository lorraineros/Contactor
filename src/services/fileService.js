import uuid from 'react-native-uuid';
import * as FileSystem from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;
const imageDirectory = `${FileSystem.documentDirectory}images`

const onException = (cb, errorHandler) => {
  try {
    return cb();
  } catch (err) {
    if (errorHandler) {
      return errorHandler(err);
    }
    console.error(err);
  }
};

export const cleanDirectory = async () => {
  await FileSystem.deleteAsync(contactDirectory);
  await FileSystem.deleteAsync(imageDirectory)
};

export const writeAsStringFile = async (file, contents) => {
  return await onException(() => FileSystem.writeAsStringAsync(file, contents));
};

export const copyFile = async (file, newLocation) => {
  return await onException(() => FileSystem.copyAsync({
    from: file,
    to: newLocation
  }));
};

export const addContact = async contact => {
  const fileName = contact.name.toLowerCase() + '-' + uuid.v4() + '.json';
  await onException(() => writeAsStringFile(`${contactDirectory}/${fileName}`, JSON.stringify(contact)));

  return {
    name: fileName,
    type: 'contact',
    file: await loadContact(fileName)
  };
};

export const addImage = async imageLocation => {
  const folderSplit = imageLocation.split('/');
  const fileName = folderSplit[folderSplit.length - 1];
  await onException(() => copyFile(imageLocation, `${imageDirectory}/${fileName}`));

  return {
    name: fileName,
    type: 'image',
    file: await loadImage(fileName)
  };
}

export const editContact = async (fileName, editedContact) => {
  const contact = await loadContact(fileName);
  contact.name = editedContact.name;
  contact.phoneNumber = editedContact.phoneNumber;
  contact.photo = editedContact.photo;
  contact.image = editedContact.image;
  await onException(() => writeAsStringFile(`${contactDirectory}/${fileName}`, JSON.stringify(contact)));

  return {
    name: fileName,
    type: 'contact',
    file: await loadContact(fileName)
  };
};

export const loadContact = async fileName => {
  return await JSON.parse(await onException(() => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`)));
};

export const loadImage = async fileName => {
  return await onException(() => FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
    encoding: FileSystem.EncodingType.Base64
  }));
}

const setupDirectory = async () => {
  const contactDir = await FileSystem.getInfoAsync(contactDirectory);
  const imageDir = await FileSystem.getInfoAsync(imageDirectory);

  if (!contactDir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  }
  if (!imageDir.exists) {
    await FileSystem.makeDirectoryAsync(imageDirectory);
  }
};

export const getAllContacts = async () => {
  await setupDirectory();

  const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
  return Promise.all(result.map(async fileName => {
    return {
      name: fileName,
      type: 'contact',
      file: await loadContact(fileName)
    };
  }));
};

export const getAllImages = async () => {
  await setupDirectory();

  const result = await onException(() => FileSystem.readDirectoryAsync(imageDirectory));
  return Promise.all(result.map(async fileName => {
    return {
      name: fileName,
      type: 'image',
      file: await loadImage(fileName)
    };
  }));
}
