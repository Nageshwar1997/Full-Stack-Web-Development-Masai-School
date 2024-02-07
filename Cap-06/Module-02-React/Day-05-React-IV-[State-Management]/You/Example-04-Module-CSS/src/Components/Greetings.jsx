import styles from "./Greetings.module.css";

function Greetings() {
  return (
    <div>
      <p>Some other lorem ipsum text in greetings component</p>
          <p className={styles.title}>Hello People</p>
    </div>
  );
}

export default Greetings;
