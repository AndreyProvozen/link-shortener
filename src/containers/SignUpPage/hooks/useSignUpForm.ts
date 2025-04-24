import { useState, FormEvent } from 'react';

import { signUp } from '@/api';
import { EMAIL_REGEX } from '@/constants';

interface FormFieldsProps {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

interface ErrorsProps extends Partial<FormFieldsProps> {
  general?: string;
}

const inputFields = [
  { name: 'username', type: 'text', placeholder: 'Username' },
  { name: 'email', type: 'email', placeholder: 'Email' },
  { name: 'password', type: 'password', placeholder: 'Password' },
  { name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password' },
] as const;

const DEFAULT_PROPS = { email: '', password: '', confirmPassword: '', username: '' };

const useSignUpForm = () => {
  const [userData, setUserData] = useState<FormFieldsProps>(DEFAULT_PROPS);
  const [isActivateAccountModalOpen, setIsActivateAccountModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorsProps>({});

  const { email, password, confirmPassword, username } = userData;

  const validateForm = () => {
    const newErrors: ErrorsProps = {};

    if (!username) {
      newErrors.username = 'Username is required';
    }

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
      const errorMessage = await signUp({ email, password, username });
      if (errorMessage) return setErrors(prev => ({ ...prev, general: errorMessage }));

      setIsActivateAccountModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const setFormField = (field: keyof FormFieldsProps, value: string) =>
    setUserData(prev => ({ ...prev, [field]: value }));

  return {
    userData,
    inputFields,
    isActivateAccountModalOpen,
    isLoading,
    errors,
    setFormField,
    setIsActivateAccountModalOpen,
    handleOnSubmit,
  };
};

export default useSignUpForm;
