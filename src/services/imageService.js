import * as ImagePicker from 'expo-image-picker'

const CAMERA_ROLL = 'CAMERA_ROLL'

const getPermission = async permissionTypes => {
  if (permissionTypes.indexOf(CAMERA_ROLL) >= 0) {
    await ImagePicker.requestMediaLibraryPermissionsAsync()
  }
}

export const selectFromCameraRoll = async () => {
  await getPermission([CAMERA_ROLL])
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.8,
    base64: true,
    aspect: [16, 9]
  })

  if (result.canceled) { return '' }
  return result.uri
}
