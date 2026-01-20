import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Input } from '@/components/Input';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { colors, spacing, typography } from '@/theme';

export const NewPasswordScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.main, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
          style={styles.container}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>New Password</Text>
            <Text style={styles.subtitle}>Your password must different from previous password.</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Input placeholder="New Password" isPassword={true} showEyeIcon={true} />
            
            <Text style={styles.validationText}>
              Your password needs to be at least 8 characters long. Includes some words and phrases to make it even safer
            </Text>

            <Input placeholder="Confirm New Password" isPassword={true} showEyeIcon={true} />
          </View>

          {/* Footer with Navigation Fix */}
          <View style={styles.footer}>
            <ButtonPrimary 
              title="Confirm" 
              onPress={() => navigation.navigate('Success')} 
            />
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
  title: { ...typography.screenTitle, color: colors.primary, fontSize: 24 },
  subtitle: { ...typography.body, color: colors.textMuted, marginTop: spacing.xs },
  form: { gap: spacing.md },
  validationText: { ...typography.caption, color: colors.textMuted, lineHeight: 18, paddingHorizontal: 4 },
  footer: { marginBottom: spacing.lg },
});