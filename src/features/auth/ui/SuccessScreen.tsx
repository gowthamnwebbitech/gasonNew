import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { colors, spacing, typography, radius } from '@/theme';

export const SuccessScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.main, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={styles.content}>
        {/* Success Illustration with softer branding colors */}
        <View style={styles.illustration}>
          <View style={styles.outerCircle}>
            <View style={styles.middleCircle}>
              <View style={styles.innerCircle}>
                <Text style={styles.check}>✓</Text>
              </View>
            </View>
          </View>
        </View>
        
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.description}>
          Your password has been reset successfully. You can now log in with your new credentials.
        </Text>
      </View>

      <View style={styles.footer}>
        <ButtonPrimary 
          title="Back to Login" 
          onPress={() => navigation.navigate('Login')} 
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: colors.white },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: spacing.xl },
  illustration: { marginBottom: spacing.xxl },
  // Triple-layer circle for a "ripple" effect design
  outerCircle: { width: 140, height: 140, backgroundColor: '#F0FFF8', borderRadius: 70, justifyContent: 'center', alignItems: 'center' },
  middleCircle: { width: 100, height: 100, backgroundColor: '#D1F7E6', borderRadius: 50, justifyContent: 'center', alignItems: 'center' },
  innerCircle: { width: 60, height: 60, backgroundColor: colors.primary, borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  check: { color: colors.white, fontSize: 32, fontWeight: 'bold' },
  
  title: { ...typography.screenTitle, fontSize: 32, color: colors.textPrimary, marginBottom: spacing.sm },
  description: { ...typography.body, textAlign: 'center', color: colors.textSecondary, lineHeight: 24 },
  
  footer: { paddingHorizontal: spacing.lg, marginBottom: spacing.lg },
  button: { borderRadius: radius.xl } // Ensures 30px pill shape
});