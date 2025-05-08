import { MOCK_API_URL } from '@/constants';
import '@testing-library/jest-dom';
import 'intersection-observer';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.assign(navigator, { clipboard: { writeText: jest.fn() } });

jest.mock('next/router', () => ({ useRouter: jest.fn() }));

jest.mock('react-toastify', () => ({ toast: { success: jest.fn(), error: jest.fn() } }));

jest.mock('@/utils/customFetch', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({ data: 'mocked response' }),
}));

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: { API_URL: MOCK_API_URL },
  serverRuntimeConfig: {},
}));
