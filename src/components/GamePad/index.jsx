import React, { useState } from 'react';
import { Animated, PanResponder } from 'react-native';

import { Plate, Handler } from './styles';

const GamePad = ({ size = 120 }) => {
  const [pan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value
      });
    },
    onPanResponderMove: (evt, gestureState) => {
      const max = size / 2;
      const min = (size / 2) * -1;
      let { dx, dy } = gestureState;

      if (dx > 0 && dx > max) dx = max;
      if (dx < 0 && dx < min) dx = min;
      if (dy > 0 && dy > max) dy = max;
      if (dy < 0 && dy < min) dy = min;

      console.info('limit:', max, min, 'd:', dx, dy);
      console.info('-----');

      Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false
      })(evt, { dx, dy });
    },
    onPanResponderRelease: () => {
      pan.setValue({ x: 0, y: 0 });
    }
  });

  return (
    <>
      <Plate size={size}>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
            backgroundColor: 'yellow',
            opacity: 0.5
          }}
          {...panResponder.panHandlers}
        >
          <Handler size={size} {...panResponder.panHandlers} />
        </Animated.View>
      </Plate>
    </>
  );
};

export default GamePad;
