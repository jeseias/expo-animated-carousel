import { Slider } from "@/components/slider";
import { ImageSlider } from "@/data/slider-data";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Slider itemList={ImageSlider} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
