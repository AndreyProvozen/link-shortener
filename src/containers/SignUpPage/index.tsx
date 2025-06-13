import Image from 'next/image';
import type { FC } from 'react';

import { Button, Divider, ErrorMessage, Input, Link } from '@/atoms';
import { FullScreenWrapper } from '@/components';

import useSignUpForm from './hooks/useSignUpForm';
import ActivateAccountModal from './modals/ActivateAccountModal';

const SignUpPage: FC = () => {
  const {
    userData,
    isActivateAccountModalOpen,
    isLoading,
    inputFields,
    errors,
    setFormField,
    setIsActivateAccountModalOpen,
    handleOnSubmit,
  } = useSignUpForm();

  return (
    <>
      <FullScreenWrapper>
        <h1 className="text-5xl font-bold mb-1">Sign Up</h1>
        <p className="text-xl max-w-80 text-black-500 mb-4">Create an account to get started</p>
        <form onSubmit={handleOnSubmit} className="text-start flex flex-col gap-2 w-full max-w-80 mb-4">
          {inputFields.map(({ name, type = 'text', placeholder }) => (
            <Input
              key={name}
              type={type}
              error={errors[name]}
              placeholder={placeholder}
              value={userData[name]}
              onChange={event => setFormField(name, event.target.value)}
            />
          ))}
          <Button disabled={isLoading} type="submit">
            Sign Up
          </Button>
          {errors.general && <ErrorMessage className="text-center">{errors.general}</ErrorMessage>}
        </form>
        <Divider text="or" className="mb-4" />
        <Button className="flex items-center gap-2 w-full justify-center" variant="secondary">
          <Image width={24} height={24} src="/svg/google.svg" alt="Continue with Google image" /> Continue with Google
        </Button>
        <div className="text-black-500 mt-4">
          Already have an account?{' '}
          <Link variant="secondary" href="/login">
            Login
          </Link>
        </div>
      </FullScreenWrapper>
      {isActivateAccountModalOpen && <ActivateAccountModal setIsModalOpen={setIsActivateAccountModalOpen} />}
    </>
  );
};

export default SignUpPage;
