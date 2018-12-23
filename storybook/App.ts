import { getStorybookUI, configure } from '@storybook/react-native'

import './rn-addons'

// import stories
configure(() => {
  require('./stories')
}, module)

const StorybookUIRootApp = getStorybookUI({})

export default StorybookUIRootApp
