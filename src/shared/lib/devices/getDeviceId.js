import { isValidDeviceId } from './isValidDeviceId.js';
import { generateDeviceId } from './generateDeviceId.js';

const DEVICE_ID_KEY = 'deviceId';

export const getDeviceId = () => {
  const storedId = localStorage.getItem(DEVICE_ID_KEY);

  if (isValidDeviceId(storedId)) {
    return storedId;
  }

  const deviceId = generateDeviceId();

  localStorage.setItem(DEVICE_ID_KEY, deviceId);

  return deviceId;
};
