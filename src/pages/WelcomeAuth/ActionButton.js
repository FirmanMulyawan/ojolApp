import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../utils';
import {Button} from '../../components';

const ActionButton = ({desc, title}) => {
  return (
    <View style={sytles.wrapper.component}>
      <Text style={sytles.text.desc}>{desc}</Text>
      <Button title={title} />
    </View>
  );
};

const sytles = {
  wrapper: {
    component: {marginBottom: 43, maxWidth: 225},
  },
  text: {
    desc: {
      fontSize: 10,
      color: colors.text.default,
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 6,
    },
  },
};

export default ActionButton;
