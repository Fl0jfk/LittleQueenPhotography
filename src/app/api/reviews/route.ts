export async function GET() {
  const placeId ='ChIJ6RZTf8wlnIoRjDML46rOPok';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&language=fr`;
  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
      });
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const reviews = data.result.reviews || [];
      console.log(reviews)
      return new Response(JSON.stringify({ reviews }), {
          headers: {
              'Content-Type': 'application/json',
          },
      });
  } catch (e) {
      console.error(e);
      return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
          status: 500,
          headers: {
              'Content-Type': 'application/json',
          },
      });
  }
}