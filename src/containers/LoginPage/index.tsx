import { FC } from 'react';

import { Button, Input, Link } from '@/atoms';
import { FullScreenWrapper } from '@/components';

import useLoginForm from './hooks/useLoginForm';

const LoginPage: FC = () => {
  const { email, password, isLoading, errors, setPassword, setEmail, handleOnSubmit } = useLoginForm();

  return (
    <FullScreenWrapper>
      <h1 className="text-5xl font-bold">Login</h1>
      <p className="text-xl max-w-80 text-black-500 mb-4">Login to your account to continue</p>
      <form onSubmit={handleOnSubmit} className="text-start flex flex-col gap-2 w-full max-w-80 mb-6">
        <Input
          type="email"
          error={errors.email}
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          type="password"
          error={errors.password}
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Button disabled={isLoading} type="submit">
          Login
        </Button>
      </form>
      <Link href="/" variant="secondary">
        Forgot password?
      </Link>
      <div className="text-black-500">
        Don’t you have an account?{' '}
        <Link variant="secondary" href="/signup">
          Register
        </Link>
      </div>
    </FullScreenWrapper>
  );
};

export default LoginPage;
