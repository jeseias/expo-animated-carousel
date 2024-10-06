import { ImageSliderType } from "@/data/slider-data";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface Props {
  item: ImageSliderType;
  index: number;
  scrollX: SharedValue<number>;
}

const { width } = Dimensions.get("screen");

export const SliderItem = ({ item, scrollX, index }: Props) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.20, 0, width * 0.20],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9]
          ),
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
      <Image source={item.img} style={styles.image} />
      <LinearGradient
        style={styles.background}
        colors={["transparent", "rgba(0, 0, 0, .8)"]}
      >
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity style={styles.icon} activeOpacity={0.8}>
            <Ionicons name="heart" size={24} color="#ffff" />
          </TouchableOpacity>
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: width,
  },
  icon: {
    backgroundColor: "rgba(0,0,0,.3)",
    padding: 5,
    borderRadius: 30,
  },
  image: {
    width: 300,
    height: 500,
    borderRadius: 20,
  },
  background: {
    position: "absolute",
    justifyContent: "space-between",
    height: 500,
    width: 300,
    padding: 20,
    borderRadius: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1.5,
  },
  description: {
    color: "#fff",
    fontSize: 12,
    letterSpacing: 1.2,
  },
});
