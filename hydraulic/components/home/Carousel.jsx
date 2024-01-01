import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://scontent.fasr1-1.fna.fbcdn.net/v/t39.30808-6/337554124_511013604568753_3958075618556318309_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xVyw0q0TywwAX-Ayckm&_nc_ht=scontent.fasr1-1.fna&oh=00_AfBcfOmUgh93Q_Tn_ZU0HqW_VlB55-FgJvfaleUhJztASg&oe=65696B43",
    "https://www.oleocon.com.tr/assets/home/images/numbersLeftImage.webp",
    "https://www.safe-t-bleed.com/wp-content/uploads/2017/10/AdobeStock_81083278-1200x0-c-default.jpg",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "92%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
