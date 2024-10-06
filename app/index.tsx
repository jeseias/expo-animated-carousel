import { Slider } from "@/components/slider";
import { ImageSlider } from "@/data/slider-data";
import { StyleSheet, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Slider itemList={ImageSlider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
