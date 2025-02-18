"use client"
import {FaSpinner} from "react-icons/fa"

export const LoadingSpinner: React.FC = () => (
  <div className='flex items-center justify-center z-[1000] fixed top-0 left-0 right-0 bottom-0 bg-black/80'>
    <FaSpinner size={75} color='#0096FF' className="animate-spin z-[1000]"/>
  </div>
)
