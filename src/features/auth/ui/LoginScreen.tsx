import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Input } from '@/components/Input';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { ButtonOutline } from '@/components/ButtonOutline';
import { colors, spacing, typography } from '@/theme';

export const LoginScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.main, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.container}
        >
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.welcome}>Welcome back!</Text>
            <Text style={styles.title}>Sign In</Text>
          </View>

          {/* Form Section */}
          <View style={styles.form}>
            <Input placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
            <Input placeholder="Password" isPassword={true} />
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Forget Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Action Section */}
          <View style={styles.actions}>
            <ButtonPrimary title="Sign In" onPress={() => {}} />
            <View style={styles.dividerRow}>
              <View style={styles.line} /><Text style={styles.orText}>OR</Text><View style={styles.line} />
            </View>
            <ButtonOutline title="Continue with Google" icon="google" />
          </View>

          {/* Fixed Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don’t have an account ?{' '}
              <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
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
  header: { marginTop: spacing.xl },
  welcome: { ...typography.sectionTitle, color: colors.primary },
  title: { ...typography.screenTitle },
  form: { gap: spacing.xs },
  forgotBtn: { alignSelf: 'flex-end', marginTop: spacing.xs },
  forgotText: { ...typography.body, color: colors.textPrimary },
  actions: { gap: spacing.md },
  dividerRow: { flexDirection: 'row', alignItems: 'center', marginVertical: spacing.sm },
  line: { flex: 1, height: 1, backgroundColor: colors.border },
  orText: { marginHorizontal: spacing.md, color: colors.textMuted, ...typography.caption },
  footer: { marginBottom: spacing.lg },
  footerText: { ...typography.body, textAlign: 'center', color: colors.textSecondary },
  link: { ...typography.link, fontWeight: 'bold', color:colors.black },
});