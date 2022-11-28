import React from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';
import styles from './login.style';
import Input from '../../../src/components/Input/Input';
import Button from '../../../src/components/Button/Button';
import {Formik} from 'formik';
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3443/3443338.png',
          }}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={formValues => console.log(formValues)}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı Adı Giriniz..."
              value={values.username}
              onType={handleChange('username')}
            />
            <Input
              placeholder="Şifrenizi Girin..."
              value={values.password}
              onType={handleChange('password')}
            />
            <Button text="GİRİŞ YAP" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
