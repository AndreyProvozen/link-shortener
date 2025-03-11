import React, { FC, useState } from 'react';

import { Button, Link } from '@/atoms';
import { FullScreenWrapper } from '@/components';

const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(prev => !prev);
  };

  return (
    <FullScreenWrapper>
      <div className="text-center flex flex-col items-center bg-white-50 gap-2 px-20 py-10 my-auto rounded-md mx-auto z-10">
        <h1 className="text-5xl font-bold">Login</h1>
        <p className="text-xl max-w-80 text-black-500">Login to your account to continue</p>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-2 w-full max-w-80">
          <input
            type="email"
            placeholder="Email"
            className="border border-white-100 rounded-xl p-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-white-100 rounded-xl p-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button disabled={isLoading} type="submit">
            Login
          </Button>
        </form>
        <Link href="/" variant="secondary" className="mt-3">
          Forgot password?
        </Link>
        <div className="text-black-500">
          Don’t you have an account?{' '}
          <Link variant="secondary" href="/auth" className="mt-3">
            Register
          </Link>
        </div>
      </div>
    </FullScreenWrapper>
  );
};

export default LoginPage;
