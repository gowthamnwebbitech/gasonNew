import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, radius, typography } from '@/theme';
import Icon from 'react-native-vector-icons/Feather'; // Standard, clean icon set

export const Input = ({ isPassword, ...props }: any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Determine if we should hide text
  const shouldSecureText = isPassword && !isPasswordVisible;

  return (
    <View style={styles.wrapper}>
      <TextInput
        {...props}
        secureTextEntry={shouldSecureText}
        placeholderTextColor={colors.textMuted}
        style={styles.input}
      />
      
      {isPassword && (
        <TouchableOpacity 
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.iconContainer}
        >
          <Icon 
            name={isPasswordVisible ? "eye" : "eye-off"} 
            size={20} 
            color={colors.primary} 
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5, // Slightly thicker border matches the mockup better
    borderColor: colors.primary,
    borderRadius: radius.lg, // Use a larger radius for that modern rounded look
    paddingHorizontal: spacing.md,
    marginVertical: spacing.xs,
    backgroundColor: colors.white, // Ensure white background
    height: 56, // Industry standard height for modern mobile forms
  },
  input: {
    flex: 1,
    ...typography.bodyLarge, // Inter_18pt-Medium
    color: colors.textPrimary,
  },
  iconContainer: {
    marginLeft: spacing.sm,
  },
});