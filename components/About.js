import styles from "../styles/About.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const About = () => {
  const router = useRouter();

  return (
    <Container>
      <Text>
        <p className={styles.paragraph}>
          Car owners spend up to 7 years of their lives paying for their cars,
          then dealerships buy the vehicle for less than it&apos;s worth, with
          the profit in their pockets. <b>We</b> are fixing this cycle by giving
          the benefit to the correct person - you.
        </p>
        <p className={styles.paragraph}>
          Blue Auto was established in 2021, with a combined 24 years of
          experience in car sales and services. Instead of buying your vehicle
          from you, we sell it for you. The seller AND the buyer wins.
        </p>
        <p className={styles.paragraph}>
          <b>Blue Auto</b> is here to ensure your experience of buying/selling
          your car runs smoothly. Even if you just need the right advice,
          we&apos;re happy to help.
        </p>
        <Link href="/contact" onClick={() => router.push("/contact")}>
          Contact us today.
        </Link>
      </Text>
      <BottomSection>
        <Image
          className={styles.about_image}
          src="/keys.webp"
          layout="responsive"
          width={800}
          height={500}
        ></Image>
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

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;

const Container = styled.div`
  display: flex;
  width: 60%;
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
  a {
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
  }
`;

const BottomSection = styled.div`
  display: flex;
  margin-top: 50px;
  width: 900px;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
