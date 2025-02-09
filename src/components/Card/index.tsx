import styles from "./card.module.css";

interface CardProps {
  children: React.ReactNode;
  img?: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="card" style={{ borderRadius: 12 }}>
      {props.img ? (
        <img
          src={props.img}
          className={`card-img-top ${styles.img}`}
          alt="doggo"
        />
      ) : null}
      <div className="card-body">{props.children}</div>
    </div>
  );
}
