import { Image, StyleSheet } from "react-native";

const ImageViewer = ({ imageSource, selectedImage }) => {
  const imageSrc = selectedImage ? { uri: selectedImage } : imageSource;
  return <Image source={imageSrc} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
