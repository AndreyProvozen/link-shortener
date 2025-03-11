import React, { FC, useState } from 'react';

import { Button, Link } from '@/atoms';
import Image from 'next/image';
import { Header } from '@/components';

const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Image
        className="object-cover object-center z-[-1]"
        alt="Login Background"
        src="/svg/login-bg.svg"
        sizes="100vw"
        priority
        fill
      />
      <Header containerClasses="px-5" />
      <div className="text-center flex flex-col items-center bg-white-50 gap-2 px-20 py-10 my-auto rounded-md mx-auto">
        <h1 className="text-5xl text-black-500 font-bold">Login</h1>
        <p className="text-xl max-w-80">Login to your account to continue</p>
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
        <Link href="/" className="mt-3">
          Forgot password?
        </Link>
        <div>
          Don’t you have an account?{' '}
          <Link variant="secondary" href="/auth" className="mt-3">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
