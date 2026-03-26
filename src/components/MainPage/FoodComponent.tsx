import Link from "next/link";

interface FoodComponentProps {
  id: number;
  photo: string;
  title: string;
}

export const FoodComponent = ({ id, photo, title }: FoodComponentProps) => {
  return (
    <Link href={`/${id}`} className="food-link">
      <div className="food">
        <img src={photo} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
};
