import { useColorMode } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/switch';

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    return (
      <Switch
        position="fixed"
        top="1rem"
        right="1rem"
        colorScheme="black"
        isChecked={isDark}
        onChange={toggleColorMode}
      />
    )
  }