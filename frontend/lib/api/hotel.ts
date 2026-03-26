
export const hotelApi = {
  hotelCardList: async (query: string, type: string, price: string, limit: number) => {
    const params = new URLSearchParams()
    if (query) params.set('location', query)
    if (type) params.set('type', type)
    if (price) params.set('price', price)
    params.set('limit', String(limit))

    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/hotels/search?${params.toString()}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json();
    if (!res.ok) {
      console.log(data, data.message);
      throw new Error(data.message || 'Failed to fetch hotels data');
    }
    return data;
  },

};