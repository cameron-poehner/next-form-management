'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { schema } from './registrationSchema';

export const RegistrationForm = () => {
  const form = useForm<{
    first: string;
    last: string;
    email: string;
  }>({
    resolver: zodResolver(schema),
    defaultValues: {
      first: '',
      last: '',
      email: '',
    },
  });
};
