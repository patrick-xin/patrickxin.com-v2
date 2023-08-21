import { Card, CardContent, CardHeader } from "@/components/ui/card";

type StatisticsCardProps = {
  icon: React.ReactElement;
  title: string;
  count: number | undefined;
  iconBg: string;
};
const StatisticsCard = ({
  icon,
  title,
  count,
  iconBg,
}: StatisticsCardProps) => {
  return (
    <Card className="w-[320px]">
      <CardHeader>
        <div className="flex items-center justify-center gap-6">
          <div
            className={`rounded-2xl ${iconBg} flex h-10 w-10 items-center justify-center p-2 text-white`}
          >
            {icon}
          </div>
          <h3>{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-1 flex-col items-center justify-around rounded-xl bg-gray-50 py-6 dark:bg-white/10">
          <div className="font-heading text-4xl tracking-wider">
            {count || 0}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
