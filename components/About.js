import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <img src="/logoclipping.png" alt="this" height="600" width="400" />
      <div className={styles.content}>
        <h1>Established in 2021</h1>
        <p>
          AutoScout was created with people in mind. It&aposs clear that vehicle
          garages take a large amount of the profit from selling cars, and the
          buyer never gets to meet the seller. This approach breaks the
          relationship that we used to have with each other when we used to
          buy/sell vehicles, and at AutoScout we believe this relationship is
          vital for ensuring trust in both parties. Sell your car to a person
          you meet. Buy a car from an owner you know.
        </p>
      </div>
    </div>
  );
};

export default About;
