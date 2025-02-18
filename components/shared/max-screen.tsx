import { cn } from '@/lib/utils'

interface IMaxScreenWrapperPropType {
  children: React.ReactNode
  style?: string
}

export const MaxScreenBox: React.FC<IMaxScreenWrapperPropType> = ({
  style,
  children
}) => {
  return <div className={cn('m-auto max-w-[1440px]', style)}>{children}</div>
}
