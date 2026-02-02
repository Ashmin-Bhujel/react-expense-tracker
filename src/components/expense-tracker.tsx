import { Plus } from "lucide-react";
import Button from "./button";
import Filter from "./filter";

export default function ExpenseTracker() {
  return (
    <section className="container mx-auto my-12 px-4">
      {/* Options */}
      <div className="flex items-center justify-between">
        <Filter />
        <Button logo={<Plus />}>Add Data</Button>
      </div>
    </section>
  );
}
