import { JSX } from "react/jsx-runtime";
import Link from "next/link";
import styles from './page.module.css';  // Importa el archivo CSS

const About: React.FC = (): JSX.Element => {
  return (
    <div className={styles.aboutContainer}>
      {/* Animación de entrada para el título */}
      <div>
        <h1 className={styles.title}>The Legend of the Egg Breaker:</h1>
      </div>

      {/* Descripción animada */}
      <div>
        <p className={styles.description}>
          Long ago, in a mystical land called Clucktopia, there existed an ancient egg-shaped crystal known as the Egg of Eternity. This crystal held the power to shape the very fabric of time and space. But the Egg was not easily broken. For centuries, brave adventurers tried to crack its mysterious shell, hoping to unleash its secrets and claim its immense power. But no one succeeded.

          In the heart of Clucktopia, a young and curious farmer named Ella discovered an old, dusty map hidden beneath the haystacks in her barn. The map, said to be drawn by the legendary wizard Gryffin the Clucker, pointed the way to the legendary Egg of Eternity. Intrigued, Ella packed her bags, grabbed her trusty hoe, and set off on a journey that would change the course of history.

          As Ella ventured through enchanted forests, climbed towering mountains, and crossed sparkling rivers, she encountered all manner of strange creatures and magical beings. Some tried to help her, while others sought to stop her. But Ella was determined—her heart burned with the desire to unlock the Egg’s secrets and bring prosperity to her village.

          Upon reaching the sacred temple where the Egg was said to reside, Ella discovered a hidden mechanism. A mysterious inscription read, “The Egg can only be cracked by those who break with purpose, who strike with patience and persistence.”

          Ella stood before the Egg, pondering the words. She tried everything—picking it up, pushing it, tapping it gently, and even shouting at it. But it was only when she gave the Egg a powerful click—a simple strike of her hand—that something magical happened.

          The shell of the Egg began to crack. Slowly at first, but with each click, it broke more and more, until with a final, triumphant smash, the Egg shattered into a thousand pieces, revealing the Essence of Time—a glowing orb filled with the power of creation itself.

          But instead of a destructive force, the Essence granted Ella the ability to control time itself—she could stop, rewind, and fast forward moments at will. However, there was a twist: the power of the Essence was fleeting. To keep it, Ella would need to continually "break" the egg's energy, clicking to harness its essence again and again.

          And so, the game began. Not for one person, but for all. Legends spread across Clucktopia and beyond. The Egg of Eternity became a challenge for adventurers worldwide. Now, every time the Egg was cracked, the power of the Essence was reborn, ready to be harnessed once more by the determined clickers who sought its magic.

          And now, as the story goes, the game lives on in digital form. Egg Breaker Clicker invites you to join Ella’s legacy. Will you have the strength, patience, and persistence to crack the Egg and unlock the hidden secrets of the universe? Only time—and many, many clicks—will tell.
        </p>
      </div>

      {/* Botón animado */}
      <div style={{ display: "flex", gap: 20 }}>
        <Link href={"/"}>
          <button className={styles.goBackButton}  >
            Go back
          </button>
        </Link >
        <Link href={"game"}>
          <button className={styles.startButton}  >
            Start Playing
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
