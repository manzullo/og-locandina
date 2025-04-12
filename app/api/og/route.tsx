import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);

  const titolo = searchParams.get('titolo') || 'Evento Speciale';
  const giorno = searchParams.get('giorno') || 'Sabato, 12 Aprile 2025';
  const orario = searchParams.get('orario') || 'Dalle 13:15 alle 16:15';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          padding: 40,
          backgroundImage: 'url(https://www.romapiu.it/wp-content/uploads/2021/10/Teatro-Centrale-Roma-6-wpcf_340x200.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 16, padding: 24 }}>
          <div style={{ fontSize: 50, fontWeight: 700 }}>{titolo}</div>
          <div>{giorno}</div>
          <div>{orario}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}