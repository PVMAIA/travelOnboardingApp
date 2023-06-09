import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Animated,
  Image,
  TouchableOpacity
} from 'react-native';

import { images, theme } from '../../constants';

const { onboarding1, onboarding2, onboarding3 } = images;
const { COLORS, FONTS, SIZES } = theme;

const onBoardings = [
  {
      title: "Let's Travelling",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      img: onboarding1
  },
  {
      title: "Navigation",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      img: onboarding2
  },
  {
      title: "Destination",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
      img: onboarding3
  }
];

const OnBoarding = () => {
  const [completed, setCompleted] = useState(false);
  const scrollX = new Animated.Value(0);

  function renderContent() {
    return(
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment={"center"}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } },
        ], { useNativeDriver: false})}
      >
        {onBoardings.map((item, index) => (
          <View
            key={index}
            style={{ width: SIZES.app.width}}
          >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center"}}>
              <Image 
                source={item.img}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%"
                }}
              />
            </View>
            <View 
              style={{
                position: "absolute",
                bottom: '10%',
                left: 40,
                right: 40,
              }}
            >
              <Text 
                style={{ 
                  ...FONTS.h1, 
                  color: COLORS.gray, 
                  textAlign: 'center'
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: "center",
                  marginTop: SIZES.global.base,
                  color: COLORS.gray
                }}
              >
                {item.description}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 150,
                height: 60,
                paddingLeft: 20,
                justifyContent: 'center',
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                backgroundColor: COLORS.blue
              }}
            > 
              <Text
                style={{
                  ...FONTS.h1, 
                  color: COLORS.white
                }}
              >
                {completed ? "Let's Go" : "Skip"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    )
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.app.width);

    return (
      <View style={styles.dotContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp"
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.global.base, 17, SIZES.global.base],
            extrapolate: "clamp"
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={[styles.dot, { opacity, width: dotSize, height: dotSize}]}
            />
          )
        })}
      </View>
    )
  }

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      if(Math.round(value / SIZES.app.width) === onBoardings.length - 1) {
        setCompleted(true)
      }
    });

    return () => scrollX.removeAllListeners();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {renderContent()}
      </View>
      <View style={styles.dotRootContainer}>
        {renderDots()}
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white
  },
  dotRootContainer: {
    position: 'absolute',
    bottom: SIZES.app.height > 700 ? '27%' : '20%'
  },
  dotContainer: {
    flexDirection: "row",
    height: SIZES.global.padding,
    alignItems: "center",
    justifyContent: "center"
  },
  dot: {
    borderRadius: SIZES.global.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.global.radius / 2
  }
})

export default OnBoarding;