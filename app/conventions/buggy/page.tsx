import { ErrorSimulator } from "@/components/ErrorSimulator";

const BuggyPage = () => {
  return (
    <div className="aspect-video grid p-2 border border-opacity-20 rounded-md place-items-center min-h-[300px] border-theme-accent">
      <ErrorSimulator />
    </div>
  );
};
export default BuggyPage;
