import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { IllustrationRegister } from '../../assets';
import { Button, Input } from '../../components';
import { setForm } from '../../redux';
import { colors } from '../../utils';

const Register = ({navigation}) => {
  // const globalState = useSelector(state => state);
  const RegisterReducer = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();
  // const [form, setForm] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });

  // useEffect(() => {
  //   console.log('tes hello world');
  // }, []);

  // useEffect(() => {
  //   console.log('global state: ', globalState);
  // }, [globalState]);

  const sendData = () => {
    console.log('data yang dikirim: ', RegisterReducer.form);
  };

  const onInputChange = (value, inputType) => {
    // setForm({
    //   ...form,
    //   [input]: value,
    // });
    // dispatch({type: 'SET_TITLE'});
    dispatch(setForm(inputType, value));
  };
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button type="icon" name="back" onPress={() => navigation.goBack()} />
        <IllustrationRegister
          width={106}
          height={115}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data unutk proses daftar anda{' '}
          {/* {globalState.name} */}
          {RegisterReducer.title}
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="nama lengkap"
          value={RegisterReducer.form.fullName}
          onChangeText={value => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="email"
          value={RegisterReducer.form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="password"
          value={RegisterReducer.form.password}
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
