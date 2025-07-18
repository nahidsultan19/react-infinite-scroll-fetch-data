import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";

const Product = ({ title, price, thumbnail }) => {
  return (
    <div className="grid grid-cols-2">
      <Card>
        <CardHeader>
          <img
            src={thumbnail}
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription>${price}</CardDescription>
          <Button>Buy Now</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
