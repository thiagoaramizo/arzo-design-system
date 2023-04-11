import { create } from '@storybook/theming/create'
import {colors, fonts } from '@arzo/tokens'

export default create({
  
  //Brand
  base: 'light',
  brandTitle: 'Arzo - Storybook Design System',
  brandUrl: 'https://arzo.dev',
  brandImage: '../src/assets/image/logo_storybook.png',
  brandTarget: '_self',

  //Ui
  fontBase: fonts.default,
  colorPrimary: colors.gray400,
  colorSecondary: colors.gray500,
  appBg: colors.gray100,
  appContentBg: colors.white,
  appBorderColor: colors.gray200,
  
  //Top Bar
  barTextColor: colors.white,
  barSelectedColor: colors.cyan700,
  barBg: colors.gray700,
  
  //Text
  textColor: colors.gray600,
  textInverseColor: colors.gray300,
  textMutedColor: colors.gray500,

  // Input
  inputBg: colors.gray100,
  inputBorder: colors.gray100,

});