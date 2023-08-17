import { memo } from 'react';
import { PageWrapper } from '../shared/components';
import { AboutUs } from '../widgets/about-us';
import { Contact } from '../widgets/contacts';
import { Header } from '../widgets/header';
import { Reviews } from '../widgets/reviews';
import { Content } from '../widgets/therapy-content';
import { FAQ } from '../widgets/FAQ';

export enum PageAnchors {
  THERAPY = 'therapy',
  ABOUTUS = 'aboutUs',
  REVIEWS = 'reviews',
  CONTACT = 'contact',
  FAQ = 'faq',
}

const mainPage = () => (
  <>
    <PageWrapper>
      <Header />
      <div className="gap-24 flex flex-col relative pb-24">
        <section id={PageAnchors.THERAPY}>
          <Content />
        </section>
        <section id={PageAnchors.ABOUTUS}>
          <AboutUs />
        </section>
        <section id={PageAnchors.REVIEWS}>
          <Reviews />
        </section>
        <section id={PageAnchors.CONTACT}>
          <Contact />
        </section>
        <section id={PageAnchors.FAQ}>
          <FAQ />
        </section>
      </div>
    </PageWrapper>
  </>
);
export const MainPage = memo(mainPage);
