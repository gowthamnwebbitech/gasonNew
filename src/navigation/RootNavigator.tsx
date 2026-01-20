import React from 'react';
import { AuthStack } from './AuthStack';

export const RootNavigator = () => {
  // Toggle this to true later once you have login logic
  const isAuthenticated = false; 

  if (!isAuthenticated) {
    return <AuthStack />;
  }

  // Placeholder for your main app tabs
  return <AuthStack />; 
};