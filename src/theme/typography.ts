import { TextStyle } from 'react-native';
import { colors } from './colors';

const families = {
  poppinsBold: 'Poppins-Bold',
  poppinsSemiBold: 'Poppins-SemiBold',
  interRegular: 'Inter_18pt-Regular', // Updated to match your 18pt files
  interMedium: 'Inter_18pt-Medium',   // Updated to match your 18pt files
};

type Typography = {
  screenTitle: TextStyle;
  sectionTitle: TextStyle;
  heading: TextStyle;
  bodyLarge: TextStyle;
  body: TextStyle;
  caption: TextStyle;
  buttonPrimary: TextStyle;
  buttonSecondary: TextStyle;
  link: TextStyle;
};

export const typography: Typography = {
  screenTitle: {
    fontFamily: families.poppinsBold,
    fontSize: 26,
    color: colors.textPrimary,
  },
  sectionTitle: {
    fontFamily: families.poppinsBold,
    fontSize: 24,
    color: colors.primary,
  },
  heading: {
    fontFamily: families.poppinsSemiBold,
    fontSize: 20,
    color: colors.textPrimary,
  },
  bodyLarge: {
    fontFamily: families.interMedium,
    fontSize: 16,
    color: colors.textPrimary,
  },
  body: {
    fontFamily: families.interRegular,
    fontSize: 14,
    color: colors.textSecondary,
  },
  caption: {
    fontFamily: families.interRegular,
    fontSize: 12,
    color: colors.textSecondary,
  },
  buttonPrimary: {
    fontFamily: families.poppinsSemiBold,
    fontSize: 18,
    color: colors.white,
  },
  buttonSecondary: {
    fontFamily: families.interMedium,
    fontSize: 16,
    color: colors.textPrimary,
  },
  link: {
    fontFamily: families.interMedium,
    fontSize: 14,
    color: colors.primary,
  },
};