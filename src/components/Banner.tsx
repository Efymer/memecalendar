import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Discover the Next Big Token Launch 🚀
          </h1>
          <p className="text-lg opacity-90 mb-6">
            Stay ahead of the curve with our curated list of upcoming
            memejob.fun token launches.
          </p>
          <div className="flex gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate("/add")}
            >
              Submit Your Token
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
