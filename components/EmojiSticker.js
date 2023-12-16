import { Image, View } from "react-native";
import Animated from "react-native-reanimated";

const EmojiSticker = ({ imageSize, stickerSource }) => {
  return (
    <View style={{ top: -35 }}>
      <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
};

export default EmojiSticker;
