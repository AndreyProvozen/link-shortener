import { FC, FormEvent, useState } from 'react';

import { Button, Input, Link } from '@/atoms';
import { FullScreenWrapper } from '@/components';
import { EMAIL_REGEX } from '@/constants';
import { signUp } from '@/api';
import { useRouter } from 'next/router';

interface ErrorsProps {
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

const SignUpPage: FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorsProps>({});

  const validateForm = () => {
    const newErrors: ErrorsProps = {};

    if (!EMAIL_REGEX.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (password.length < 3 || password.length > 32) {
      newErrors.password = 'Password must be between 3 and 32 characters';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const res = await signUp({ email, password });

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
      <h1 className="text-5xl font-bold mb-1">Sign Up</h1>
      <p className="text-xl max-w-80 text-black-500 mb-6">Create an account to get started</p>
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
        <Input
          type="password"
          error={errors.confirmPassword}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={event => {
            setErrors(prev => ({ ...prev, confirmPassword: '' }));
            setConfirmPassword(event.target.value);
          }}
        />
        <Button disabled={isLoading} type="submit">
          Sign Up
        </Button>
      </form>
      <div className="text-black-500 mt-1">
        Already have an account?{' '}
        <Link variant="secondary" href="/login">
          Login
        </Link>
      </div>
    </FullScreenWrapper>
  );
};

export default SignUpPage;
