import { Card } from "@repo/ui/card";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Recent Transactions">
      <div className="">
        {transactions.map((t) => (
          <div className="flex justify-between">
            <div className="py-1">  
              <div className="text-xs">
                {t.time.toDateString()}
              </div>
              <div className="text-slate-600 text-xs mt-1">
                <span className="mr-1 border border-gray-400 px-2">
                  {t.status}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              + Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
