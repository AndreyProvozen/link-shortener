import { useRouter } from 'next/router';
import { useState, type FormEvent } from 'react';

import { login } from '@/api/auth';
import { EMAIL_REGEX } from '@/constants';

interface ErrorsProps {
  email?: string;
  password?: string;
  general?: string;
}

const useLoginForm = () => {
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
      const message = await login({ email, password });

      if (message) {
        setErrors(prev => ({ ...prev, general: message }));
        return;
      }

      router.push('/');
    } finally {
      setIsLoading(false);
    }
  };

  return { email, password, errors, isLoading, setEmail, setPassword, handleOnSubmit };
};

export default useLoginForm;
