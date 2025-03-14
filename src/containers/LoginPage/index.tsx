import { FC, FormEvent, useState } from 'react';

import { Button, Input, Link } from '@/atoms';
import { FullScreenWrapper } from '@/components';
import { EMAIL_REGEX } from '@/constants';
import { login } from '@/api';
import { useRouter } from 'next/router';

interface ErrorsProps {
  email?: string;
  password?: string;
  general?: string;
}

const LoginPage: FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorsProps>({});

  const validateForm = () => {
    const newErrors: ErrorsProps = {};

    if (!EMAIL_REGEX.exec(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (password.length < 3 || password.length > 32) {
      newErrors.password = 'Password must be between 3 and 32 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const res = await login({ email, password });

      if (res.message) {
        setErrors(prev => ({ ...prev, general: res.message }));
        return;
      }

      router.push('/');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FullScreenWrapper>
      <h1 className="text-5xl font-bold mb-1">Login</h1>
      <p className="text-xl max-w-80 text-black-500 mb-6">Login to your account to continue</p>
      <form onSubmit={handleOnSubmit} className="text-start flex flex-col gap-2 w-full max-w-80 mb-6">
        <Input
          type="email"
          error={errors.email}
          placeholder="Email"
          value={email}
          onChange={event => {
            setErrors(prev => ({ ...prev, email: '' }));
            setEmail(event.target.value);
          }}
        />
        <Input
          type="password"
          error={errors.password}
          placeholder="Password"
          value={password}
          onChange={event => {
            setErrors(prev => ({ ...prev, password: '' }));
            setPassword(event.target.value);
          }}
        />
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
