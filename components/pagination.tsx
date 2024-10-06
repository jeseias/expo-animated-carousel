import { ImageSliderType } from "@/data/slider-data";
import { StyleSheet, Text, View } from "react-native";
import { SharedValue } from "react-native-reanimated";

interface Props {
  items: ImageSliderType[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
}

export const Pagination = ({ items, paginationIndex }: Props) => {
  return (
    <View style={styles.container}>
      {items.map((_, index) => {
        return (
          <View
            style={[
              styles.dot,
              { backgroundColor: paginationIndex === index ? "#222" : "#aaa" },
            ]}
          ></View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    backgroundColor: "#aaa",
    height: 8,
    width: 8,
    marginHorizontal: 2,
    borderRadius: 8,
  },
});
