
import { useState, useEffect } from "react";
import { Check, AlertTriangle, X } from "lucide-react";

interface StatusIndicatorProps {
  name: string;
  status: "online" | "degraded" | "offline";
  uptimePercentage?: number;
  lastUpdated?: string;
}

const StatusIndicator = ({
  name,
  status,
  uptimePercentage = 100,
  lastUpdated = "Vừa xong",
}: StatusIndicatorProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const statusConfig = {
    online: {
      icon: <Check size={18} />,
      color: "bg-green-500",
      text: "Hoạt động",
      textColor: "text-green-500",
      lightColor: "bg-green-500/10",
    },
    degraded: {
      icon: <AlertTriangle size={18} />,
      color: "bg-amber-500",
      text: "Hoạt động một phần",
      textColor: "text-amber-500",
      lightColor: "bg-amber-500/10",
    },
    offline: {
      icon: <X size={18} />,
      color: "bg-red-500",
      text: "Không hoạt động",
      textColor: "text-red-500",
      lightColor: "bg-red-500/10",
    },
  };

  const config = statusConfig[status];

  return (
    <div className="glass-card rounded-lg p-4 hover-scale-subtle">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 ${config.lightColor} rounded-full flex items-center justify-center ${config.textColor}`}>
            {config.icon}
          </div>
          <h3 className="font-medium">{name}</h3>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-medium ${config.lightColor} ${config.textColor}`}>
          {config.text}
        </div>
      </div>
      
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${config.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: animationComplete ? `${uptimePercentage}%` : "0%" }}
        />
      </div>
      
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>Uptime {uptimePercentage}%</span>
        <span>Cập nhật: {lastUpdated}</span>
      </div>
    </div>
  );
};

export default StatusIndicator;
