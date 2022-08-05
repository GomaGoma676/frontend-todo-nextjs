import { useRouter } from 'next/router'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Task } from '@prisma/client'

export const useQueryTasks = () => {
  const router = useRouter()
  const getTasks = async () => {
    const { data } = await axios.get<Task[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/todo`
    )
    return data
  }
  return useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: getTasks,
    onError: (err: any) => {
      if (err.response.status === 401 || err.response.status === 403)
        router.push('/')
    },
  })
}
