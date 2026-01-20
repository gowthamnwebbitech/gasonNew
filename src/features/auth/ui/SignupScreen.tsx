import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Input } from '@/components/Input';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { ButtonOutline } from '@/components/ButtonOutline';
import { colors, spacing, typography } from '@/theme';
import Icon from 'react-native-vector-icons/Feather';

export const SignupScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.main, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
          
          <View style={styles.header}>
            <Text style={styles.title}>Create Your Account</Text>
            <Text style={styles.subtitle}>Fill in your details to get started</Text>
          </View>

          <View style={styles.form}>
            <Input placeholder="User Name" />
            <Input placeholder="Email" keyboardType="email-address" />
            <Input placeholder="Password" isPassword={true} />
            
            <TouchableOpacity style={styles.termsRow} onPress={() => setIsAccepted(!isAccepted)}>
              <View style={[styles.checkbox, isAccepted && styles.checkboxActive]}>
                {isAccepted && <Icon name="check" size={12} color={colors.white} />}
              </View>
              <Text style={styles.termsText}>I accept <Text style={styles.termsBold}>Terms & Privacy</Text></Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actions}>
            <ButtonPrimary title="Sign Up" onPress={() => {}} />
            <View style={styles.dividerRow}>
              <View style={styles.line} /><Text style={styles.orText}>OR</Text><View style={styles.line} />
            </View>
            <ButtonOutline title="Continue with Google" icon="google" />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account ? <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Sign In</Text>
            </Text>
          </View>

        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: colors.white },
  container: { flex: 1, paddingHorizontal: spacing.lg, justifyContent: 'space-between' },
  header: { marginTop: spacing.lg },
  title: { ...typography.screenTitle, color: colors.primary, fontSize: 24 },
  subtitle: { ...typography.body, color: colors.textMuted },
  form: { gap: spacing.xs },
  termsRow: { flexDirection: 'row', alignItems: 'center', marginTop: spacing.sm },
  checkbox: { width: 18, height: 18, borderRadius: 4, borderWidth: 1.5, borderColor: colors.primary, marginRight: spacing.sm, justifyContent: 'center', alignItems: 'center' },
  checkboxActive: { backgroundColor: colors.primary },
  termsText: { ...typography.caption, color: colors.textSecondary },
  termsBold: { fontWeight: 'bold', color: colors.textPrimary },
  actions: { gap: spacing.sm },
  dividerRow: { flexDirection: 'row', alignItems: 'center', marginVertical: spacing.xs },
  line: { flex: 1, height: 1, backgroundColor: colors.border },
  orText: { marginHorizontal: spacing.md, color: colors.textMuted, fontSize: 12 },
  footer: { marginBottom: spacing.lg },
  footerText: { ...typography.body, textAlign: 'center' },
  link: { ...typography.link, fontWeight: 'bold', color: colors.black },
});