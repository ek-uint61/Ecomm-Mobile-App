import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt_1: (color, top) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 11,
    marginTop: top,
    color: "#333",
    marginHorizontal: SIZES.small,
  }),

  welcomeTxt_2: (color, top) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 11,
    marginTop: top,
    color: "#525252",
    marginHorizontal: SIZES.small,
  }),
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small,
    color: "#cf711f",
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#666",
  },
});

export default styles;
