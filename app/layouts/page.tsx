export default function LayoutPage() {
  return (
    <div>
      <ul className="pl-4 mb-6 space-y-2 text-gray-400 list-disc list-inside">
        <li>
          A layout is UI that is shared between multiple pages. On navigation,
          layouts preserve state, remain interactive, and do not re-render. Two
          or more layouts can also be nested.
        </li>
        <li>Try navigating between categories and sub categories.</li>
      </ul>
    </div>
  );
}
