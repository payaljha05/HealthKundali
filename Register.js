
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Register = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // Handle Sign Up logic
    console.log("Mobile:", mobile);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome User</Text>
      
      <Text style={styles.signUpText}>Sign up</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your mobile number"
        placeholderTextColor="#999"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="numeric"
      />

      <Text style={styles.infoText}>You will receive an OTP for verification</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email id"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Generate password"
          placeholderTextColor="#999"
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '🙈'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
});

export default Register;
