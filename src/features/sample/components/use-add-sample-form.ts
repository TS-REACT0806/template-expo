import { type SubmitHandler } from 'react-hook-form';

import { type AddSample } from './add-sample-form';

import { createSampleData } from '@/shared/data/create-sample';

export function useAddSampleForm() {
  const onSubmit: SubmitHandler<AddSample> = async data => {
    const createdSample = await createSampleData({
      title: data.email,
      body: data.description,
      userId: 1,
    });
    // eslint-disable-next-line no-console
    console.log(createdSample);
  };

  return {
    onSubmit,
  };
}
