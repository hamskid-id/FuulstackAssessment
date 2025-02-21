'use client'

import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/legacy/image'
import { useState } from 'react'

interface ICustomImagePropType {
  src: StaticImageData
  priority?: boolean
  alt?: string
  imgStyle?: string
  clickFunc?: (e?: any) => void // eslint-disable-line @typescript-eslint/no-explicit-any
  style: string
}

export const CustomImage: React.FC<ICustomImagePropType> = ({
  src,
  alt = 'object not found',
  style,
  imgStyle,
  priority = false,
  clickFunc
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  return (
    <div className={cn('relative', style)} onClick={clickFunc && clickFunc}>
      {isLoading && (
        <div
          className={cn('w-full animate-pulse bg-Surface_300', style, imgStyle)}
        ></div>
      )}
      <Image
        src={src}
        alt={alt}
        className={cn('w-full', imgStyle)}
        onLoadingComplete={() => setIsLoading(false)}
        layout='fill'
        priority={priority}
      />
    </div>
  )
}
