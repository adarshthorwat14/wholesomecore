// src/pages/About.jsx
import React from "react";
import styles from "./About.module.css";
import trusted1 from "../assets/trusted1.png";
import trusted2 from "../assets/trusted2.png";
import trusted3 from "../assets/trusted3.png";
import trusted4 from "../assets/trusted4.png";

import customer1 from "../assets/cust1.jpg";
const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.heroSection}>
        <h1>Why Wholesomecore?</h1>
        <p>Protein Your Gut Actually Loves</p>
      </section>

      <section className={styles.coreValues}>
        <div>
          <h2>We Fixed It</h2>
          <p>
            Wholesomecore uses clean, simple ingredients your gut actually
            recognizes. We stripped away the fake stuff — gums, fillers,
            artificial junk — to deliver clean, gut-friendly protein your body
            actually wants.
          </p>
        </div>
        <ul>
          <li>✔ Simple, Real Ingredients</li>
          <li>✔ Easy to Digest</li>
          <li>✔ Nothing Fake — Ever</li>
          <li>✔ Trusted by Women Who Know Better</li>
        </ul>
      </section>

      <section className={styles.commitmentSection}>
        <h2>Our Commitment to Clean Nutrition</h2>
        <ul>
          <li>✅ No Artificial Sweeteners</li>
          <li>✅ 3rd Party Tested for Safety</li>
          <li>✅ Sustainably Sourced Almonds</li>
          <li>✅ Packaged with Love in India</li>
        </ul>
      </section>

      <section className={styles.trustedSection}>
        <h2>Trusted by Thousands</h2>
        <p>
          From health-conscious parents to elite athletes — thousands trust
          Wholesomecore to fuel their day with gentle, clean protein.
        </p>
        <div className={styles.trustedLogos}>
          <img src={trusted1} alt="Amazon Verified" />
          <img src={trusted2} alt="Clean Label Certified" />
          <img src={trusted3} alt="Non-GMO Verified" />
          <img src={trusted4} alt="Vegan Society Certified" />
        </div>
      </section>

      <section className={styles.scienceSection}>
        <h2>Backed by Science, Made for Real Life</h2>
        <p>
          Our team of nutritionists, food scientists, and wellness experts
          crafted Wholesomecore with one goal: to support your gut health
          without compromise.
        </p>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.gridItem}>
          <h3>🌿 Naturally Gut-Friendly</h3>
          <p>
            No gums, no bloating, no artificial aftertaste — just real protein.
          </p>
        </div>
        <div className={styles.gridItem}>
          <h3>🥣 Mixes Smooth</h3>
          <p>
            Blends easily into water, smoothies, or oatmeal — no chalky lumps.
          </p>
        </div>
        <div className={styles.gridItem}>
          <h3>🧬 Transparent Ingredients</h3>
          <p>
            We disclose everything. No proprietary blends. No hidden fillers.
          </p>
        </div>
        <div className={styles.gridItem}>
          <h3>🌎 Earth-Friendly</h3>
          <p>We use minimal packaging and sustainable ingredients.</p>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialCards}>
          <div className={styles.card}>
            <img
              src={customer1}
              alt="Priya M."
              className={styles.avatar}
            />
            <p>
              “No bloating, no heaviness — finally a protein powder I can
              digest!”
            </p>
            <span>— Priya M., Bangalore</span>
          </div>
          <div className={styles.card}>
            <img
              src={customer1}
              alt="Rina K."
              className={styles.avatar}
            />
            <p>
              “My kids love the chocolate one. And I love the ingredient list!”
            </p>
            <span>— Rina K., Pune</span>
          </div>
          <div className={styles.card}>
            <img
              src={customer1}
              alt="Rakesh V."
              className={styles.avatar}
            />
            <p>“I add it to my smoothie every morning. So clean, so easy.”</p>
            <span>— Rakesh V., Delhi</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
