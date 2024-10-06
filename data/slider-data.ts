import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  img: ImageSourcePropType;
  description: string;
};

export const ImageSlider: any[] = [
  {
    title: "Nullam enim ligula",
    img: require("@/assets/carousel-images/one.jpg"),
    description: "Duis vitae liver risus, Sed vitae lgula at eros ultr",
  },
  {
    title: "Nullam enim ligula",
    img: require("@/assets/carousel-images/two.jpg"),
    description: "Duis vitae liver risus, Sed vitae lgula at eros ultr",
  },
  {
    title: "Nullam enim ligula",
    img: require("@/assets/carousel-images/three.jpg"),
    description: "Duis vitae liver risus, Sed vitae lgula at eros ultr",
  },
  {
    title: "Nullam enim ligula",
    img: require("@/assets/carousel-images/four.jpg"),
    description: "Duis vitae liver risus, Sed vitae lgula at eros ultr",
  },
  {
    title: "Nullam enim ligula",
    img: require("@/assets/carousel-images/five.jpg"),
    description: "Duis vitae liver risus, Sed vitae lgula at eros ultr",
  },
];
