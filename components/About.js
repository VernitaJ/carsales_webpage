import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.content}>
      <h1>Established in 2021</h1>
      <p className="m-10">
        AutoSurf was created with people in mind. It's clear that vehicle
        garages take a large amount of the profit from selling cars, and the
        buyer never gets to meet the seller.
      </p>
      <p className="m-10">
        This approach breaks the relationship that we used to have with each
        other when we used to buy/sell vehicles, and at AutoScout we believe
        this relationship is vital for ensuring trust in both parties. Sell your
        car to a person you meet. Buy a car from an owner you know.
      </p>
      <p className="m-10">
        Car garages in South Africa take a large part of the profit from the sale of your car. Our clients, however, pay a set fee that will not change which includes all services we offer.
        The seller wins, and the buyer wins. A lower price and more gain for everyone but the intermediary.
      </p>
      <img className={styles.about_image} src="https://res.cloudinary.com/vertigo/image/upload/v1649670501/pedri_ssxgtt.png"></img>
    </div>
  );
};

export default About;
