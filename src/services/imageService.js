import * as ImagePicker from 'expo-image-picker';

const CAMERA = 'CAMERA';
const CAMERA_ROLL = 'CAMERA_ROLL';

const cameraOptions = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.8,
    base64: true,
    aspect: [16, 9]
}

const getPermission = async permissionTypes => {
  if (permissionTypes.indexOf(CAMERA) >= 0) {
    await ImagePicker.requestCameraPermissionsAsync();
  }
  if (permissionTypes.indexOf(CAMERA_ROLL) >= 0) {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  }
};

export const takePhoto = async () => {
  await getPermission([CAMERA, CAMERA_ROLL]);
  const result = await ImagePicker.launchCameraAsync(cameraOptions);

  if (result.canceled) { return ''; }
  return result.uri;
};

export const selectFromCameraRoll = async () => {
  await getPermission([CAMERA_ROLL]);
  const result = await ImagePicker.launchImageLibraryAsync(cameraOptions);

  if (result.canceled) { return ''; }
  return result.uri;
};
