import { Image, View } from "react-native";

const EmojiSticker = ({ imageSize, stickerSource }) => {
  return (
    <View style={{ top: -35 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
};

export default EmojiSticker;
