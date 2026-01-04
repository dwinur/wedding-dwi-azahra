'use client'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export default function createQuery<T extends (...args: any) => Promise<any>>(
  fn: T,
  options?: Omit<UseQueryOptions<any>, 'queryKey' | 'queryFn'>,
) {
  return (...args: Parameters<T>) =>
    useQuery<Awaited<ReturnType<T>>>({
      ...options,
      queryKey: [fn.name, ...args],
      queryFn: () => fn(...args),
    })
}
