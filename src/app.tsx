import ExpenseTracker from "./components/expense-tracker";

export default function App() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center py-16">
      {/* Header section */}
      <header className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter">Expense Tracker</h1>
        <p className="text-(--muted-foreground)">
          A simple expense tracker app made using TypeScript, React and Tailwind
          CSS.
        </p>
      </header>

      {/* Expense tracker */}
      <ExpenseTracker />
    </main>
  );
}
