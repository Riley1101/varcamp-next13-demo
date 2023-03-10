import { InlineCard } from "@/components/InlineCard";

type Props = {};

const CartPage = (props: Props) => {
  return (
    <div className="space-y-2 ">
      <h2 className="mb-4 text-md text-theme-accent">Store page</h2>
      <InlineCard></InlineCard>
      <InlineCard></InlineCard>
      <InlineCard></InlineCard>
    </div>
  );
};

export default CartPage;
