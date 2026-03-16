import React from 'react';
import Image from 'next/image';
import styles from './TeamContactCTA.module.css';

interface TeamMember {
    name: string;
    position: string;
    photo: string;
    email?: string;
}

interface TeamContactCTAProps {
    member: TeamMember;
    title?: string;
    description?: string;
}

const TeamContactCTA: React.FC<TeamContactCTAProps> = ({
    member,
    title = "Get in touch",
    description = "Specjalistyczne doradztwo dopasowane do potrzeb Twojego obiektu. Skontaktuj się bezpośrednio z naszym ekspertem."
}) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textSide}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.description}>{description}</p>
                    </div>

                    <div className={styles.memberSide}>
                        <div className={styles.memberCard}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.memberInfo}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberPosition}>{member.position}</p>
                                {member.email && (
                                    <a href={`mailto:${member.email}`} className={styles.memberEmail}>
                                        {member.email}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamContactCTA;
