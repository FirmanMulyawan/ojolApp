import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Input, Button} from '../../components';
import {colors} from '../../utils';
import {IconBack, IllustrationRegister} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // useEffect(() => {
  //   console.log('tes hello world');
  // }, []);

  const sendData = () => {
    console.log('data yang dikirim: ', form);
  };

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <Input
          placeholder="nama lengkap"
          value={form.fullName}
          onChangeText={value => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="email"
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(83)} />
        <Button title="Daftar" onPress={sendData} />
      </ScrollView>
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
