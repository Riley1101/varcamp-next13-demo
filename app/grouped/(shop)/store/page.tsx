import { Card } from "@/components/Card";
type Props = {};

export default function Store({}: Props) {
  return (
    <div className="space-y-2">
      <h2 className="mb-4 text-md text-theme-accent">Store page</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
