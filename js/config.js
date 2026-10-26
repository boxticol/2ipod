// ─────────────────────────────────────────────────────────────
// Configuración de Spotify
// ─────────────────────────────────────────────────────────────
// 1. Crea una app en https://developer.spotify.com/dashboard
// 2. Copia su "Client ID" y pégalo abajo.
//
// El Client ID es público (flujo PKCE, sin backend).
// NUNCA pongas aquí el Client Secret.
export const SPOTIFY_CLIENT_ID = 'fef63f50bbc740068bb97b4906202c5e';

// Debe coincidir EXACTO con un "Redirect URI" registrado en el dashboard,
// incluida la barra final. Registrado: https://if-ruddy.vercel.app/
// En local usa http://127.0.0.1:5500/ (Spotify no acepta "localhost").
export const REDIRECT_URI = `${window.location.origin}/`;

export const SCOPES = [
  'streaming',
  'user-read-email',
  'user-read-private',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-library-read',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
].join(' ');

// Nombre con el que aparece este navegador en "Dispositivos" de Spotify.
export const PLAYER_NAME = 'iPod Web';
