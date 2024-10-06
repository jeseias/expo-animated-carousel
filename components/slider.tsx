import { ImageSliderType } from "@/data/slider-data";
import { View, ViewToken } from "react-native";
import { SliderItem } from "./slider-item";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Pagination } from "./pagination";
import { useRef, useState } from "react";

type Props = {
  itemList: ImageSliderType[];
};

export const Slider = ({ itemList }: Props) => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll(e) {
      scrollX.value = e.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index)
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ minWidth: "100%", maxHeight: 500 }}>
        <Animated.FlatList
          data={itemList}
          horizontal
          style={{ height: 500, minWidth: "100%" }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item, index }) => (
            <SliderItem item={item} index={index} scrollX={scrollX} />
          )}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          onScroll={onScrollHandler}
        />
      </View>
      <Pagination
        items={itemList}
        scrollX={scrollX}
        paginationIndex={paginationIndex}
      />
    </View>
  );
};
