'use client'

import React, { ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

interface ReactQueryProviderProps {
  children: ReactNode
}

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        // cacheTime: 10 * 60 * 1000, // 10 minutes

        refetchOnWindowFocus: false // Optional: disable refetch on window focus
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
