import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { IllustrationLogin } from '../../assets';
import { Button, Input } from '../../components';
import { setForm } from '../../redux';
import { colors } from '../../utils';

const Login = ({navigation}) => {
  const {form} = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();
  const sendData = () => {
    console.log('data yang dikirim: ', form);
  };

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button type="icon" name="back" onPress={() => navigation.goBack()} />
        <IllustrationLogin
          width={106}
          height={115}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Silahkan mengisi data anda, untuk masuk ke aplikasi O-JOL
        </Text>
        <View style={styles.space(64)} />
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
        <Button title="Login" onPress={sendData} />
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
export default Login;
