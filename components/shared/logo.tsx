import Brand from '../../public/Brand.svg'
import { CustomImage } from './CustomImage'
import { cn } from '@/lib/utils'
import { useRouter } from 'nextjs-toploader/app'

interface ILogoPropType {
  style?: string
}

export const Logo: React.FC<ILogoPropType> = ({ style }) => {
  const router = useRouter()
  return (
    <div>
    <CustomImage
      src={Brand}
      priority={true}
      style={cn('w-[161px] h-[84px] cursor-pointer', style)}
      clickFunc={() => router.push(`/`)}
    />
    </div>
  )
}
