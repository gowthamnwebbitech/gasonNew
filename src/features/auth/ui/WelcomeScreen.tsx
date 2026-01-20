import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ButtonPrimary } from '@/components/ButtonPrimary';
import { spacing, typography } from '@/theme';
import { images } from '@/assets';

export const WelcomeScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.main, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={styles.content}>
        <Text style={styles.title}>
          WELCOME TO GASON{'\n'}INDIA LIMITED
        </Text>
        <Image source={images.logo} style={styles.logo} />
      </View>

      <View style={styles.footer}>
        <ButtonPrimary
          title="Get Started"
          onPress={() => navigation.navigate('Login')}
          style={styles.fullWidth}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: spacing.xl,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typography.sectionTitle,
    textAlign: 'center',
    marginBottom: spacing.xxl,
    textTransform: 'uppercase',
  },
  logo: {
    width: 240,
    height: 240,
    resizeMode: 'contain',
  },
  footer: {
    paddingBottom: spacing.lg,
  },
  fullWidth: {
    width: '100%',
  },
});