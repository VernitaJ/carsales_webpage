import { isDesktop, isMobile } from 'react-device-detect';

interface DeviceDetection {
  isMobile: boolean;
  isDesktop: boolean;
}

const useDevice = (): DeviceDetection => ({
  isMobile,
  isDesktop
});

export default useDevice;