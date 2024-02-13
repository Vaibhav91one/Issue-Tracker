'use client'
import { TextArea, TextField } from '@radix-ui/themes';
import { Button } from '@radix-ui/themes';
import dynamic from 'next/dynamic'
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })
import { useForm, Controller } from 'react-hook-form'
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';


const NewIssuePage = () => {
  const router = useRouter();
  interface IssueForm {
    title: string;
    description: string;
  }
  const { register, control, handleSubmit } = useForm<IssueForm>();


  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit( async (data)=>{
        await axios.post('/api/issues', data)
        router.push('/')
    })}>
      <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')} />
      </TextField.Root>

      <Controller
        name="description"
        control={control}
        render={({field}) =>
          <SimpleMDE placeholder='Description' {...field}/>
        }
      />

      <Button>
        Submit New Issue
      </Button>
    </form>
  )
}

export default NewIssuePage
