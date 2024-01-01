import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 12,
    borderRadius: SIZES.medium,
    backgroundColor: "#ddd", // Gri renk için renk kodu
    marginBottom: 15,
  },

  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
    marginBottom: -10,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    marginBottom: 1,
  },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: "#000",
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: "#cf711f", // Turuncu tonu için renk kodu
  },

  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;
