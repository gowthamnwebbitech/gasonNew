import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { colors, spacing, typography } from '@/theme';

export const SuccessScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.main, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={styles.content}>
        {/* Success Illustration (Circles) */}
        <View style={styles.illustration}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text style={styles.check}>✓</Text>
            </View>
          </View>
        </View>
        
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.description}>
          You have successfully registered in our app and can start working in it
        </Text>
      </View>

      <View style={styles.footer}>
        <ButtonPrimary 
          title="Continue" 
          onPress={() => navigation.navigate('Login')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: colors.white },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: spacing.xl },
  illustration: { marginBottom: spacing.xxl },
  outerCircle: { width: 120, height: 120, backgroundColor: '#E6F9F1', borderRadius: 60, justifyContent: 'center', alignItems: 'center' },
  innerCircle: { width: 60, height: 60, backgroundColor: colors.primary, borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  check: { color: colors.white, fontSize: 32, fontWeight: 'bold' },
  title: { ...typography.screenTitle, fontSize: 30, marginBottom: spacing.sm },
  description: { ...typography.body, textAlign: 'center', color: colors.textSecondary },
  footer: { paddingHorizontal: spacing.lg, marginBottom: spacing.lg },
});