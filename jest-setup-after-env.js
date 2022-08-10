import '@testing-library/jest-native/extend-expect';
jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
    default: () => ({getInitialState: {then: jest.fn()}}),
    __esModule: true,
  }));
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
