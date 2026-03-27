// app/menu/[table]/layout.tsx
'use client'
import react , {useEffect , useState} from 'react'
import Loading from '@/components/users/hotelLoading'
import { Providers } from "@/provider";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [loadstate, setLoading] = useState(true);
useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);
  return (
    <>
    {loadstate ? <Loading /> :
    <Providers>
        <div>
            {children}
        </div>
    </Providers>
    }
    </>
  );
}