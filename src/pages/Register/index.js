import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '../../components';
import {colors} from '../../utils';
import {IconBack, IllustrationRegister} from '../../assets';

const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <IconBack width={25} height={25} />
      <IllustrationRegister
        width={106}
        height={115}
        style={styles.illustration}
      />
      <Text style={styles.text.desc}>
        Mohon mengisi beberapa data unutk proses daftar anda
      </Text>
      <View style={styles.space(64)} />
      <Input placeholder="nama lengkap" />
      <View style={styles.space(33)} />
      <Input placeholder="email" />
      <View style={styles.space(33)} />
      <Input placeholder="password" />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {padding: 20},
  },
  illustration: {
    marginTop: 8,
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: value => {
    return {
      height: value,
    };
  },
};
export default Register;
