import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    elevation: 12,
  },
  cover: {
    height: 290,
    width: "100%",
    resizeMode: "cover",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 999,
    borderColor: COLORS.primary,
    borderWidth: 2,
    resizeMode: "cover",
    marginTop: -155,
  },
  name: {
    fontFamily: "semibold",
    color: "#333",
    marginVertical: 5,
  },

  loginBtnContainer: {
    backgroundColor: "#ddd",
    padding: 12,
    borderWidth: 0.4,
    borderColor: "#ccc",
    borderRadius: SIZES.xxLarge,
    elevation: 22,
  },

  menuText: {
    fontFamily: "semibold",
    color: "#222",
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 26,
  },

  menuWrapper: {
    marginTop: SIZES.xLarge,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
  menuItem: (borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: COLORS.gray,
  }),
});

export default styles;
