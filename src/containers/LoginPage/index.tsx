import { FC, useState } from 'react';

import { Button, Input, Link } from '@/atoms';
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
      <h1 className="text-5xl font-bold mb-1">Login</h1>
      <p className="text-xl max-w-80 text-black-500 mb-6">Login to your account to continue</p>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-2 w-full max-w-80 mb-6">
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button disabled={isLoading} type="submit">
          Login
        </Button>
      </form>
      <Link href="/" variant="secondary">
        Forgot password?
      </Link>
      <div className="text-black-500 mt-1">
        Don’t you have an account?{' '}
        <Link variant="secondary" href="/auth">
          Register
        </Link>
      </div>
    </FullScreenWrapper>
  );
};

export default LoginPage;
