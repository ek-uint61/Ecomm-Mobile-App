import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#333",
    fontFamily: "semibold",
    fontSize: SIZES.xLarge - 2,
    textAlign: "center", // Metni ortalamak için eklenen stil özelliği
    flex: 1, // İçeriği yatayda tam ortalamak için eklenen stil özelliği
  },
});

export default styles;
