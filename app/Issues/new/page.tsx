'use client'
import { TextField, Text } from '@radix-ui/themes';
import { Button } from '@radix-ui/themes';
import dynamic from 'next/dynamic'
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })
import { useForm, Controller } from 'react-hook-form'
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Callout } from '@radix-ui/themes';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/ValidationSchema';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  interface IssueForm {
    title: string;
    description: string;
  }
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const IssueSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      await axios.post('/api/issues', data)
      router.push('/')
    } catch (error) {
      setIsSubmitting(false)
      setError("An unexpected error occured")
    }

  })

  return (
    <div className='max-w-xl'>
      {error && (
        <Callout.Root color='red' className='mb-5'>
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={IssueSubmit}>
        <TextField.Root>
          <TextField.Input placeholder='Title' {...register('title')} />
        </TextField.Root>
        <ErrorMessage>
          {errors.title?.message}
        </ErrorMessage>

        <Controller
          name="description"
          control={control}
          render={({ field }) =>
            <SimpleMDE placeholder='Description' {...field} />
          }
        />

          {/* ANother way of showing errors but the other one is more cleaner by using components for that */}
        {/* {errors.description &&
          <Text color='red' as='p'>
            {errors.description.message}
          </Text>} */}

          <ErrorMessage>
          {errors.description?.message}
          </ErrorMessage>

        <Button disabled={isSubmitting}>
          Submit New Issue
          {isSubmitting &&
          <Spinner/>
          } 
        </Button>
      </form>
    </div>

  )
}

export default NewIssuePage
