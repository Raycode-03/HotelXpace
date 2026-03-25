
export const landingApi = {
    subscribeNewsletter: async (email: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/newsletter/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
      if (!res.ok) {
        console.log(data , data.message);
      throw new Error(data.message || 'Failed to subscribe');
    }
    return data;
  },
};