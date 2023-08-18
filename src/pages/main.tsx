import { ContentWrapper } from '../shared/components';
import {
  AboutUsList,
  ReviewList,
  ContactList,
  FAQList,
  ConsultationList,
} from '../widgets';

export enum PageAnchors {
  THERAPY = 'therapy',
  ABOUTUS = 'aboutUs',
  REVIEWS = 'reviews',
  CONTACT = 'contact',
  FAQ = 'faq',
}

export const Main = () => (
  <>
    <ContentWrapper>
      <div className="gap-24 flex flex-col relative pb-24">
        <section id={PageAnchors.THERAPY}>
          <ConsultationList />
        </section>
        <section id={PageAnchors.ABOUTUS}>
          <AboutUsList />
        </section>
        <section id={PageAnchors.REVIEWS}>
          <ReviewList />
        </section>
        <section id={PageAnchors.CONTACT}>
          <ContactList />
        </section>
        <section id={PageAnchors.FAQ}>
          <FAQList />
        </section>
      </div>
    </ContentWrapper>
  </>
);
