import { useEffect } from 'react';

export function useWarmBackend() {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/health`, {
      method: 'GET',
    }).catch(()=>{});
  }, []);
}