export default function manifest() {
  return {
    name: 'Usman Zafar - Portfolio',
    short_name: 'Usman Portfolio',
    description: 'Portfolio of Usman Zafar - AI/ML Developer & Computer Science Student',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#10b981',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
