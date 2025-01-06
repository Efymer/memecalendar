import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function GoBack() {
  return (
    <div className="text-white/70 hover:text-white">
      <Link to="/" className="flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>
    </div>
  );
}
