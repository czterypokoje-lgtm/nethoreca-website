import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { faqSchema, websiteSchema, speakableSchema } from '@/lib/structured-data';
import { companyInfo, testimonials, faqData } from '@/lib/trust-signals';
import styles from './page.module.css';
import FaqAccordion from '@/components/FaqAccordion';

// IBM Carbon Icons - Using correct icon names
import {
  Hotel,
  EventsAlt,
  Building,
  Enterprise,
  PalmTree,
  Box,
  Delivery,
  Money,
  Partnership,
  Phone,
  Email,
  Time,
  Checkmark,
  ArrowRight
} from '@carbon/icons-react';

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema("https://nethoreca.pl", ["#faq-section"])) }}
      />

      <main className={styles.main}>
        {/* Hero Section - B2B Supplier Focus */}
        {/* Hero Section - 50/50 Split */}
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            {/* Left Column - Text */}
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Przestań płacić za problemy. <br />
                Wynajmij <span className={styles.highlight}>kompleksowy serwis</span> NetHoreca
              </h1>
              <div className={styles.heroButtons}>
                <Link href="/kontakt" className={styles.btnPrimary}>
                  Skontaktuj się
                </Link>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className={styles.heroVisual} style={{ minHeight: '600px', height: '100%', position: 'relative', width: '100%' }}>
              <Image
                src="/images/home/logistyka-serwis.webp"
                alt="Pracownik serwisu logistycznego z zapasem czystych, najwyższej jakości ręczników hotelowych"
                fill
                priority
                className={styles.heroImage}
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </section>

        {/* Benefits Bar */}
        <section className={styles.benefits}>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <EventsAlt size={32} className={styles.benefitIcon} />
                <h3 className={styles.benefitTitle}>Zawsze tam gdzie ty</h3>
              </div>
              <p className={styles.benefitDescription}>
                W NetHoreca rozumiemy potrzeby naszych klientów i we współpracy z naszymi partnerami pomagamy skutecznie budować pozytywny wizerunek.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <Money size={32} className={styles.benefitIcon} />
                <h3 className={styles.benefitTitle}>Opłacalne usługi</h3>
              </div>
              <p className={styles.benefitDescription}>
                Nasze usługi są opłacalne, zapewniają naszym klientom zoptymalizowane rozwiązania, które zmniejszają koszty pracy i zasobów.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <PalmTree size={32} className={styles.benefitIcon} />
                <h3 className={styles.benefitTitle}>Zrównoważony rozwój</h3>
              </div>
              <p className={styles.benefitDescription}>
                Dla nas dbanie o środowisko jest najważniejsze na każdym etapie projektowania produktów i usług.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <Checkmark size={32} className={styles.benefitIcon} />
                <h3 className={styles.benefitTitle}>Wysokie standardy</h3>
              </div>
              <p className={styles.benefitDescription}>
                Dbamy o to, aby nasze usługi zawsze spełniały wymagane standardy, potwierdzając nasze zaangażowanie w satysfakcję Klienta.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className={styles.categories}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>NASZE PRODUKTY</span>
              <h2 className={styles.sectionTitle}>
                Wszystko dla <span className={styles.highlight}>housekeepingu</span>
              </h2>
              <p className={styles.sectionDescription}>
                270+ profesjonalnych produktów dla hoteli. Wynajem lub zakup — elastyczne rozwiązania
                dopasowane do potrzeb Twojego obiektu.
              </p>
            </div>

            <div className={styles.categoryGrid}>
              {/* Textile Category */}
              <Link href="/tekstylia-hotelowe" className={styles.categoryCard}>
                <div className={styles.categoryImage}>
                  <Image
                    src="/products/posciel-hotelowa-satynowa-splot.webp"
                    alt="Tekstylia hotelowe - ręczniki, pościel, szlafroki"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.categoryContent}>
                  <span className={styles.categoryBadge}>16 LINII PRODUKTOWYCH</span>
                  <h3>Tekstylia Hotelowe</h3>
                  <p>Ręczniki, pościel, szlafroki, obrusy. 100% bawełna, gramatura 400-650 g/m². Wynajem lub zakup.</p>
                  <span className={styles.categoryLink}>
                    Zobacz produkty <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* Ecolab Category */}
              <Link href="/chemia-ecolab" className={styles.categoryCard}>
                <div className={styles.categoryImage}>
                  <Image
                    src="/products/ecolab-housekeepers.webp"
                    alt="Chemia profesjonalna Ecolab dla hoteli"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.categoryContent}>
                  <span className={styles.categoryBadge}>OFICJALNY PARTNER</span>
                  <h3>Chemia Ecolab</h3>
                  <p>130+ produktów. Pralnia, kuchnia, łazienki, dezynfekcja. Certyfikowane rozwiązania profesjonalne.</p>
                  <span className={styles.categoryLink}>
                    Zobacz produkty <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* Equipment Category */}
              <Link href="/sprzet-akcesoria" className={styles.categoryCard}>
                <div className={styles.categoryImage}>
                  <Image
                    src="/products/wozek-serwisowy-hotelowy-mobilette.webp"
                    alt="Sprzęt do sprzątania hoteli - wózki, mopy"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.categoryContent}>
                  <span className={styles.categoryBadge}>100+ PRODUKTÓW</span>
                  <h3>Sprzęt i Akcesoria</h3>
                  <p>Wózki Mobilette, mopy Rasant, systemy dozujące. Wszystko dla profesjonalnego housekeepingu.</p>
                  <span className={styles.categoryLink}>
                    Zobacz produkty <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* Selpak Professional Category */}
              <Link href="/selpak-professional" className={styles.categoryCard}>
                <div className={styles.categoryImage}>
                  <Image
                    src="/products/selpak/selpak-hero-elephant.webp"
                    alt="Selpak Professional - produkty papierowe dla hoteli"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.categoryContent}>
                  <span className={styles.categoryBadge}>DYSTRYBUTOR W POLSCE</span>
                  <h3>Selpak Professional</h3>
                  <p>Papier toaletowy, ręczniki, serwetki, dozowniki. Seria Recycled - ekologiczne rozwiązania FSC.</p>
                  <span className={styles.categoryLink}>
                    Zobacz produkty <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Laundry Service Teaser - NEW SECTION */}
        <section className={styles.laundryTeaser}>
          {/* Background Overlay */}
          <div className={styles.laundryOverlay}></div>

          <div className={styles.container}>
            <div className={styles.laundryGrid}>
              <div className={styles.laundryContent}>
                <span className={styles.laundryLabel}>
                  <span className={styles.labelDot} style={{ background: '#38bdf8' }}></span>
                  Nowy Pion Usług
                </span>
                <h2 className={styles.laundryTitle}>
                  Pralnia dla Hoteli <br />
                  <span className={styles.laundryHighlight}>Model HUB</span>
                </h2>
                <p className={styles.laundryDescription}>
                  To więcej niż pranie. To kompleksowy proces logistyczny.
                  Łączymy hotele z najlepszymi pralniami przemysłowymi.
                  <strong>Gwarancja ciągłości, jakości i oszczędności do 35%.</strong>
                </p>

                <div className={styles.laundryFeatures}>
                  <div className={styles.laundryFeature}>
                    <Checkmark size={20} className={styles.laundryIcon} />
                    <span>Obsługa 50+ Hoteli</span>
                  </div>
                  <div className={styles.laundryFeature}>
                    <Checkmark size={20} className={styles.laundryIcon} />
                    <span>Transport 24/7</span>
                  </div>
                  <div className={styles.laundryFeature}>
                    <Checkmark size={20} className={styles.laundryIcon} />
                    <span>Stała Cena / Pokój</span>
                  </div>
                  <div className={styles.laundryFeature}>
                    <Checkmark size={20} className={styles.laundryIcon} />
                    <span>Raportowanie Online</span>
                  </div>
                </div>

                <Link href="/pralnia-dla-hoteli" className={styles.btnLaundry}>
                  Sprawdź Ofertę Hubu <ArrowRight size={20} style={{ marginLeft: 8 }} />
                </Link>
              </div>

              <div className={styles.laundryImageWrapper}>
                <Image
                  src="/images/pralnia-dla-hoteli-przemyslowa.webp"
                  alt="Pralnia przemysłowa dla hoteli - Nethoreca Hub"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Value Props for Hotel Managers */}
        <section className={styles.valueProps}>
          <div className={styles.container}>
            <div className={styles.valuePropsGrid}>
              <div className={styles.valuePropsText}>
                <span className={styles.sectionLabel}>DLACZEGO NETHORECA</span>
                <h2 className={styles.sectionTitle}>
                  Mniej stresu, więcej <span className={styles.highlight}>czasu na gości</span>
                </h2>
                <p className={styles.sectionDescription}>
                  Jako manager hotelu lub housekeepingu wiesz, że czas to pieniądz.
                  NetHoreca to jeden dostawca dla wszystkich potrzeb — tekstylia, chemia,
                  sprzęt. Koniec z zarządzaniem dziesiątkami kontaktów z dostawcami.
                </p>
              </div>
              <div className={styles.valuePropsCards}>
                <div className={styles.valuePropCard}>
                  <div className={styles.valuePropIconWrapper}>
                    <Box size={28} className={styles.valuePropIconSvg} />
                  </div>
                  <h4>Jeden Dostawca</h4>
                  <p>270+ produktów z jednego źródła. Jedna faktura, jeden kontakt, jeden partner.</p>
                </div>
                <div className={styles.valuePropCard}>
                  <div className={styles.valuePropIconWrapper}>
                    <Delivery size={28} className={styles.valuePropIconSvg} />
                  </div>
                  <h4>Dostawa w 48h</h4>
                  <p>Szybka realizacja zamówień. Magazyn w Polsce, logistyka dopracowana przez 26 lat.</p>
                </div>
                <div className={styles.valuePropCard}>
                  <div className={styles.valuePropIconWrapper}>
                    <Money size={28} className={styles.valuePropIconSvg} />
                  </div>
                  <h4>Wynajem lub Zakup</h4>
                  <p>Elastyczne modele współpracy. Wynajem tekstyliów lub zakup — wybierz co pasuje.</p>
                </div>
                <div className={styles.valuePropCard}>
                  <div className={styles.valuePropIconWrapper}>
                    <Partnership size={28} className={styles.valuePropIconSvg} />
                  </div>
                  <h4>Partner Ecolab</h4>
                  <p>Oficjalny dystrybutor. Oryginalne produkty, wsparcie techniczne, szkolenia.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.stats}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>26+</div>
                <div className={styles.statLabel}>Lat Doświadczenia</div>
                <div className={styles.statDescription}>Na rynku od 1998 roku</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Obsługiwanych Hoteli</div>
                <div className={styles.statDescription}>W całej Polsce</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>270+</div>
                <div className={styles.statLabel}>Produktów w Ofercie</div>
                <div className={styles.statDescription}>Tekstylia, chemia, sprzęt</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>48h</div>
                <div className={styles.statLabel}>Czas Dostawy</div>
                <div className={styles.statDescription}>Do dowolnego miejsca w Polsce</div>
              </div>
            </div>
          </div>
        </section>

        {/* Rental vs Purchase Section - For Decision Makers */}
        <section className={styles.rentalSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>MODEL WSPÓŁPRACY</span>
              <h2 className={styles.sectionTitle}>
                <span className={styles.highlight}>Wynajem</span> czy zakup?
              </h2>
              <p className={styles.sectionDescription}>
                Dopasuj model współpracy do potrzeb Twojego hotelu.
                Obie opcje mają swoje zalety — pomożemy wybrać najlepszą.
              </p>
            </div>

            <div className={styles.comparisonGrid}>
              {/* Rental Option */}
              <div className={styles.optionCard}>
                <div className={styles.optionHeader}>
                  <h3>Wynajem Tekstyliów</h3>
                  <span className={styles.optionBadge}>POPULARNE</span>
                </div>
                <ul className={styles.optionList}>
                  <li><Checkmark size={16} className={styles.checkIcon} /> Brak inwestycji początkowej</li>
                  <li><Checkmark size={16} className={styles.checkIcon} /> Regularna wymiana zużytych tekstyliów</li>
                  <li><Checkmark size={16} className={styles.checkIcon} /> Pranie i logistyka po naszej stronie</li>
                  <li><Checkmark size={16} className={styles.checkIcon} /> Stała miesięczna opłata</li>
                  <li><Checkmark size={16} className={styles.checkIcon} /> Elastyczna ilość w sezonie</li>
                </ul>
                <p className={styles.optionNote}>
                  <strong>Idealne dla:</strong> Hoteli szukających optymalizacji kosztów
                  i outsourcingu zarządzania tekstyliami.
                </p>
                <Link href="/wynajem" className={styles.btnPrimary}>
                  Dowiedz się więcej
                </Link>
              </div>

              {/* Purchase Option */}
              <div className={styles.optionCard}>
                <div className={styles.optionHeader}>
                  <h3>Zakup Produktów</h3>
                </div>
                <ul className={styles.optionList}>
                  <li><Checkmark size={16} className={styles.checkIcon} /> Pełna kontrola nad asortymentem</li>
                  <li><Checkmark size={16} className={styles.checkIcon} /> Produkty na stałe w Twojej własności</li>
                  <li><Checkmark size={16} className={styles.checkIcon} /> Ceny hurtowe przy większych zamówieniach</li>
                  <li><Checkmark size={16} className={styles.checkIcon} /> Szeroki wybór gramatur i linii</li>
                  <li><Checkmark size={16} className={styles.checkIcon} /> Możliwość brandingu (logo hotelu)</li>
                </ul>
                <p className={styles.optionNote}>
                  <strong>Idealne dla:</strong> Hoteli premium, które chcą pełnej
                  kontroli nad jakością i wizerunkiem.
                </p>
                <Link href="/sprzedaz" className={styles.btnSecondary}>
                  Zobacz katalog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <div className={styles.testimonialsHeader}>
              <div>
                <span className={styles.sectionLabel}>OPINIE KLIENTÓW</span>
                <h2 className={styles.sectionTitle}>
                  Co mówią <span className={styles.highlight}>managerowie hoteli</span>
                </h2>
              </div>
              <div className={styles.carouselControls}>
                <button className={styles.carouselBtn} aria-label="Poprzedni">‹</button>
                <button className={styles.carouselBtn} aria-label="Następny">›</button>
              </div>
            </div>

            <div className={styles.testimonialsGrid}>
              {testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className={styles.testimonialCard}>
                  <div className={styles.testimonialRating}>
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className={styles.testimonialText}>&quot;{testimonial.text}&quot;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}></div>
                    <div className={styles.authorInfo}>
                      <div className={styles.authorName}>{testimonial.author}</div>
                      <div className={styles.authorPosition}>{testimonial.position}</div>
                      <div className={styles.authorHotel}>{testimonial.hotel}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecolab Partnership Section */}
        <section className={styles.ecolabSection}>
          <div className={styles.container}>
            <div className={styles.ecolabGrid}>
              <div className={styles.ecolabImage}>
                <Image
                  src="/products/schemat-dozowania-chemii-ecolab.webp"
                  alt="Profesjonalne produkty Ecolab dla hoteli"
                  width={600}
                  height={450}
                  className={styles.ecolabImg}
                />
              </div>
              <div className={styles.ecolabContent}>
                <span className={styles.sectionLabel}>OFICJALNY PARTNER</span>
                <h2 className={styles.sectionTitle}>
                  Chemia profesjonalna <span className={styles.highlight}>Ecolab</span>
                </h2>
                <p className={styles.sectionDescription}>
                  Jako autoryzowany dystrybutor Ecolab oferujemy pełen asortyment
                  profesjonalnej chemii dla hoteli. 130+ produktów w 14 liniach —
                  od pralni po kuchnię.
                </p>
                <div className={styles.ecolabFeatures}>
                  <div className={styles.ecolabFeature}>
                    <Checkmark size={20} className={styles.checkIconGreen} />
                    <span>Oryginalne produkty Ecolab</span>
                  </div>
                  <div className={styles.ecolabFeature}>
                    <Checkmark size={20} className={styles.checkIconGreen} />
                    <span>Szkolenia dla personelu</span>
                  </div>
                  <div className={styles.ecolabFeature}>
                    <Checkmark size={20} className={styles.checkIconGreen} />
                    <span>Wsparcie techniczne</span>
                  </div>
                  <div className={styles.ecolabFeature}>
                    <Checkmark size={20} className={styles.checkIconGreen} />
                    <span>Systemy dozujące</span>
                  </div>
                </div>
                <Link href="/chemia-ecolab" className={styles.btnPrimary}>
                  Zobacz produkty Ecolab
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              <div className={styles.faqHeader}>
                <span className={styles.sectionLabel}>FAQ</span>
                <h2 className={styles.faqTitle}>
                  Najczęściej<br />
                  zadawane<br />
                  pytania
                </h2>
                <Link href="/faq" className={styles.faqAllLink}>
                  Zobacz wszystkie <ArrowRight size={16} />
                </Link>
              </div>
              <div className={styles.faqList}>
                <FaqAccordion
                  items={[
                    ...(faqData[0]?.questions.slice(0, 5) || []),
                    ...(faqData[1]?.questions.slice(0, 3) || [])
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Gotowy na współpracę?</h2>
              <p className={styles.ctaDescription}>
                Skontaktuj się z nami i otrzymaj bezpłatną wycenę dostosowaną
                do potrzeb Twojego hotelu. Odpowiemy w ciągu 24 godzin.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/zapytanie-ofertowe" className={styles.btnWhite}>
                  Zamów Bezpłatną Wycenę
                </Link>
                <Link href="/kontakt" className={styles.btnOutline}>
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
