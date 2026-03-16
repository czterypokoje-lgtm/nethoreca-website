'use client';

import { Quotes } from '@carbon/icons-react'; // Fixed import
import styles from '../../app/tekstylia-hotelowe/posciel/page.module.css';

export default function CaseStudy() {
    return (
        <section className={styles.caseStudySection} style={{ background: '#0b4d8c' }}>
            <div className={styles.container}>
                <div className={styles.caseStudyContent}>
                    <div>
                        <span style={{ color: '#6dc7b8', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                            CASE STUDY
                        </span>
                        <h2 className={styles.caseStudyTitle} style={{ color: 'white' }}>
                            Hotel Verde Montana 4* Zaoszczędził <span style={{ color: '#6dc7b8' }}>42,000 PLN</span> Rocznie
                        </h2>

                        <div style={{ marginBottom: '2rem' }}>
                            <div className={styles.csBlock} style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ color: 'white', fontWeight: 600 }}>WYZWANIE</h4>
                                <p style={{ color: 'rgba(255,255,255,0.9)' }}>Wysokie koszty zakupu pościeli i częste wymiany zniszczonego materiału (plamy, przetarcia).</p>
                            </div>
                            <div className={styles.csBlock}>
                                <h4 style={{ color: 'white', fontWeight: 600 }}>ROZWIĄZANIE</h4>
                                <p style={{ color: 'rgba(255,255,255,0.9)' }}>Przejście na model wynajmu pościeli Satyna Premium z pełnym serwisem pralniczym.</p>
                            </div>
                        </div>

                        <button className={styles.btnWhite}>
                            Pobierz Pełne Case Study
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ position: 'relative', height: '300px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                            <img
                                src="/images/case-studies/hotel-verde-montana-pokoj-wyposazenie.webp"
                                alt="Wyposażenie Hotelu Verde Montana"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        <div className={styles.resultsGrid} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                            <div className={styles.resultItem}>
                                <strong style={{ color: '#6dc7b8' }}>-30%</strong>
                                <span style={{ color: 'white' }}>Kosztów Tekstyliów</span>
                            </div>
                            <div className={styles.resultItem}>
                                <strong style={{ color: '#6dc7b8' }}>100%</strong>
                                <span style={{ color: 'white' }}>Czystości (Normy Sanitarne)</span>
                            </div>
                            <div className={styles.resultItem}>
                                <strong style={{ color: '#6dc7b8' }}>48h</strong>
                                <span style={{ color: 'white' }}>Czas Reakcji</span>
                            </div>
                        </div>

                        <blockquote className={styles.quote} style={{ color: 'white', borderLeftColor: '#6dc7b8' }}>
                            <Quotes size={32} style={{ color: '#6dc7b8', marginBottom: '1rem', display: 'block' }} />
                            "Najlepsza decyzja operacyjna. Jakość lepsza niż nasza poprzednia, a koszty o połowę niższe. Zero zmartwień o pranie."
                            <footer style={{ fontSize: '0.875rem', marginTop: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                                - Dyrektor Operacyjny, Hotel Verde Montana
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
