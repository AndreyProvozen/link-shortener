import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { ToastContainer, Zoom } from 'react-toastify';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ToastContainer limit={5} theme="colored" closeOnClick transition={Zoom} stacked position="bottom-right" />
    <Component {...pageProps} />
  </>
);

export default App;
