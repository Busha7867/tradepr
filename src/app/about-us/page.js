import Aboutus from './Aboutus'


export const metadata = {
  title: "Sign",
  description: "test",
  alternates: {
    canonical: "https://trade-pros.org/our-products/rice/non-basmati/swarna-raw-25-broken/"
  },
  openGraph: {
    title: 'Acme',
    description: 'Acme is a...',
    type: 'article',
    url: 'https://trade-pros.org/our-products/rice/non-basmati/swarna-parboiled-5-broken/'
  }
};

export default function aboutus() {
  return (
    <>
  <Aboutus/>
    </>
  )
};