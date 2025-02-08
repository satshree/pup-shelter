interface CardProps {
  children: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div className="card" style={{ borderRadius: 12 }}>
      <div className="card-body">{props.children}</div>
    </div>
  );
}
