import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { colors, spacing, typography, radius } from '@/theme';

export const OTPScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.main, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Verify phone number</Text>
          <Text style={styles.subtitle}>Which part of country that you call home?</Text>
        </View>

        <View style={styles.otpSection}>
          <View style={styles.otpRow}>
            {['7', '4', '', ''].map((val, i) => (
              <TextInput 
                key={i} 
                style={[styles.otpInput, val ? styles.otpInputActive : null]} 
                value={val} 
                keyboardType="number-pad" 
                maxLength={1} 
              />
            ))}
          </View>
          <Text style={styles.resendText}>
            Resend code in <Text style={styles.timer}>55 s</Text>
          </Text>
        </View>

        <View style={styles.footer}>
          {/* NAVIGATION FIX: Navigates to New Password */}
          <ButtonPrimary 
            title="Verify" 
            onPress={() => navigation.navigate('NewPassword')} 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: colors.white },
  container: { flex: 1, paddingHorizontal: spacing.lg, justifyContent: 'space-between' },
  header: { marginTop: spacing.xl },
  title: { ...typography.screenTitle, color: colors.primary, fontSize: 24 },
  subtitle: { ...typography.body, color: colors.textMuted, marginTop: spacing.xs },
  otpSection: { alignItems: 'center' },
  otpRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: spacing.xl },
  otpInput: { width: 64, height: 64, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, textAlign: 'center', fontSize: 22, color: colors.textPrimary },
  otpInputActive: { borderColor: colors.textPrimary },
  resendText: { ...typography.body, color: colors.textPrimary },
  timer: { fontWeight: 'bold' },
  footer: { marginBottom: spacing.lg },
});