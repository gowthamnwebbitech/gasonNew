import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { colors, spacing, typography, radius } from '@/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ForgotPasswordScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState('email');

  return (
    <View style={[styles.main, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Dont worry! it happens. Please select your email or phone number so we can send you a code.</Text>
        </View>

        <View style={styles.cardGroup}>
          <TouchableOpacity 
            style={[styles.card, selected === 'email' && styles.cardActive]}
            onPress={() => setSelected('email')}
          >
            <View style={styles.iconCircle}><Icon name="email-outline" size={20} color={colors.white} /></View>
            <View style={styles.cardBody}>
              <Text style={styles.cardLabel}>Email</Text>
              <Text style={styles.cardValue}>Your email: *****dyne@mail.com</Text>
            </View>
            <View style={selected === 'email' ? styles.radioSelected : styles.radio} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.card, selected === 'phone' && styles.cardActive]}
            onPress={() => setSelected('phone')}
          >
            <View style={styles.iconCircle}><Icon name="phone-outline" size={20} color={colors.white} /></View>
            <View style={styles.cardBody}>
              <Text style={styles.cardLabel}>Phone Number</Text>
              <Text style={styles.cardValue}>Your phone: *******4566</Text>
            </View>
            <View style={selected === 'phone' ? styles.radioSelected : styles.radio} />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          {/* NAVIGATION FIX: Navigates to OTP */}
          <ButtonPrimary 
            title="Next" 
            onPress={() => navigation.navigate('OTP')} 
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
  subtitle: { ...typography.body, color: colors.textMuted, marginTop: spacing.xs, lineHeight: 20 },
  cardGroup: { gap: spacing.md },
  card: { flexDirection: 'row', alignItems: 'center', padding: spacing.md, borderWidth: 1, borderColor: colors.divider, borderRadius: radius.lg },
  cardActive: { borderColor: colors.textPrimary, backgroundColor: colors.surface },
  iconCircle: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.black, justifyContent: 'center', alignItems: 'center' },
  cardBody: { flex: 1, marginLeft: spacing.md },
  cardLabel: { fontWeight: 'bold', fontSize: 16, color: colors.textPrimary },
  cardValue: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: colors.border },
  radioSelected: { width: 20, height: 20, borderRadius: 10, backgroundColor: colors.black, borderWidth: 5, borderColor: colors.white },
  footer: { marginBottom: spacing.lg },
});