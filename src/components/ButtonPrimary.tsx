import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TouchableOpacityProps } from 'react-native';
import { colors, spacing, typography, radius } from '@/theme';

// Define interface for better TypeScript support
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[]; // Allow custom styles from outside
}

export const ButtonPrimary = ({ title, onPress, style, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity 
      style={[styles.button, style]} // Combines default styles with passed props
      onPress={onPress}
      activeOpacity={0.7}
      {...props} // Sends all other props like 'disabled' to the TouchableOpacity
    >
      <Text style={typography.buttonPrimary}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxxl,
    borderRadius: radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200, // Best for Gason UI consistency
    marginVertical: spacing.sm,
  },
});