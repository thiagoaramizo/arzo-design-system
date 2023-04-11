import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import arzoTheme from './arzoTheme'

addons.setConfig({
  //theme: themes.light
  theme: arzoTheme
})