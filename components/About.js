import styles from "../styles/About.module.css";
import Image from "next/image";
import styled from "styled-components";

const About = () => {
  return (
    <div>
      <div className={styles.content}>
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
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default About;

const BottomImage = styled.div`
  margin-top: 40px;
  width: 100%;
`;
