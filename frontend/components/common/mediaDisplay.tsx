import React from 'react'
import { ImageOff } from 'lucide-react'
import Image from 'next/image';
interface MediaDisplayProps {
  image_url?: string | null;
  alt: string;
  className?: string;
}

function optimizeCloudinaryUrl(url: string, isVideo = false) {
  if (!url || !url.includes('cloudinary.com')) return url;
  if (isVideo) return url.replace('/upload/', '/upload/w_800,q_auto,vc_auto/');
  return url.replace('/upload/', '/upload/w_800,q_auto,f_auto/');
}

function MediaDisplay({ image_url, alt, className }: MediaDisplayProps) {
  return (
    <div className={`relative overflow-hidden ${className ?? 'h-32 w-full'}`}>
      {image_url ? (
        <Image
          src={optimizeCloudinaryUrl(image_url)}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          height={100}
          width={100}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center bg-gray-100">
          <ImageOff className="h-10 w-10 text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 font-medium">No Media</p>
        </div>
      )}
    </div>
  )
}

export default MediaDisplay