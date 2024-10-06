import { ImageSlider, ImageSliderType } from "@/data/slider-data";
import { FlatList } from "react-native";
import { SliderItem } from "./slider-item";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

type Props = {
  itemList: ImageSliderType[];
};

export const Slider = ({ itemList }: Props) => {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll(e) {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <Animated.FlatList
      data={itemList}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      renderItem={({ item, index }) => (
        <SliderItem item={item} index={index} scrollX={scrollX} />
      )}
      onScroll={onScrollHandler}
    />
  );
};
