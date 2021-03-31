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
      let { dx, dy } = gestureState;
      const hypotenuse = Math.sqrt(Math.abs(dx) ** 2 + Math.abs(dy) ** 2);
      if (hypotenuse > max) {
        // let ndx = dx;
        // let ndy = dy;
        if (Math.abs(dx) > Math.abs(dy)) {
          const modifier = dx > 0 ? 1 : -1;
          const dyFix = Math.abs(dy) > max ? max : Math.abs(dy);
          const ndx = Math.sqrt(max ** 2 - dyFix ** 2);
          dx = (ndx === 0 ? max : ndx) * modifier;
        } else {
          const modifier = dy > 0 ? 1 : -1;
          const dxFix = Math.abs(dx) > max ? max : Math.abs(dx);
          const ndy = Math.sqrt(max ** 2 - dxFix ** 2);
          dy = (ndy === 0 ? max : ndy) * modifier;
        }
        console.info(dx, dy);
        console.info('----');
      }

      // const max = size / 2;
      // const min = (size / 2) * -1;
      // let { dx, dy } = gestureState;

      // if (dx > 0 && dx > max) dx = max;
      // if (dx < 0 && dx < min) dx = min;
      // if (dy > 0 && dy > max) dy = max;
      // if (dy < 0 && dy < min) dy = min;

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
            transform: [{ translateX: pan.x }, { translateY: pan.y }]
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
