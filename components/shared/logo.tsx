import Brand from '../../public/Brand.svg'
import { CustomImage } from './image'
import { cn } from '@/lib/utils'
import { useRouter } from 'nextjs-toploader/app'

interface ILogoPropType {
  style?: string
}

export const Logo: React.FC<ILogoPropType> = ({ style }) => {
  const router = useRouter()
  return (
    <CustomImage
      src={Brand}
      priority={true}
      style={cn('md:w-[123px] md:h-[33px] cursor-pointer', style)}
      clickFunc={() => router.push(`/`)}
    />
  )
}
