import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        Work by Satshree Shrestha
        <br />
        <a href="https://frontend-take-home.fetch.com/" target="_blank">
          Fetch Frontend Take Home Exercise
        </a>
      </div>
      <div>
        <small>
          Illustration from{" "}
          <a href="https://storyset.com/" target="_blank">
            StorySet
          </a>
        </small>
      </div>
    </div>
  );
}
