// next.config.js (yoki .ts)
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  defaultLocale: 'uz',
  locales: ['uz', 'en', 'ru'],
  messages: {
    path: './messages'
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // boshqa Next.js sozlamalaringiz shu yerda
  images: {
    unoptimized: true
  },
};

export default withNextIntl(nextConfig);
