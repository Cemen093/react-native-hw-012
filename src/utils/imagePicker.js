import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

export const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
        alert('Не удалось получить разрешение на доступ к галерее');
        return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
    });

    if (!result.cancelled) {
        await saveImage(result.uri);
    }
};

export const saveImage = async (uri) => {
    try {
        const asset = await MediaLibrary.createAssetAsync(uri);
        const album = await MediaLibrary.getAlbumAsync('MyGallery');

        if (album === null) {
            await MediaLibrary.createAlbumAsync('MyGallery', asset, false);
        } else {
            await MediaLibrary.addAssetsToAlbumAsync([asset], album.id, false);
        }

        alert('Изображение успешно сохранено в галерее устройства');
    } catch (error) {
        alert('Не удалось сохранить изображение в галерее');
        console.log(error);
    }
};
