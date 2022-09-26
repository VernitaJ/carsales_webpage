import styles from "../styles/About.module.css";
import Image from "next/image";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <div>
        <p className={styles.paragraph}>
          Car owners spend up to 7 years of their lives paying for their cars,
          then dealerships buy the vehicle for less than it&apos;s worth, with
          the profit in their pockets. <b>We</b> are fixing that by giving the
          benefit to the correct person - you.
        </p>
        <p className={styles.paragraph}>
          Blue Auto was established in 2021, with a combined 24 years of
          experience in car sales and services. Instead of buying your vehicle
          from you, we sell it for you. The seller AND the buyer wins. A lower
          price and more gain for everyone but the dealership.
        </p>
        <p className={styles.paragraph}>
          <b>Blue Auto</b> is here to ensure your experience of buying/selling
          your car runs smoothly. Even if you just need the right advice,
          we&apos;re happy to help. Contact us today.
        </p>
      </div>
      <BottomSection>
        <img
          className={styles.about_image}
          src="https://res.cloudinary.com/vertigo/image/upload/v1649670501/pedri_ssxgtt.png"
        ></img>
        <BottomImage>
          <Image
            src="/blueauto_logo.png"
            width={200}
            height={35}
            style={{
              filter: "drop-shadow(rgb(190,190,200) 1px 1px 2px)",
            }}
          />
        </BottomImage>
      </BottomSection>
    </Container>
  );
};

export default About;

const BottomImage = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  gap: 120px;
  border-radius: 10px;
  font-style: bold;
  color: rgb(5, 23, 66);
  padding: 2%;
  margin: 0 10% 0;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
