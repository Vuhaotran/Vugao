
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CommandCardProps {
  name: string;
  description: string;
  usage: string;
  example?: string;
  category: string;
  icon: React.ReactNode;
}

const CommandCard = ({ name, description, usage, example, category, icon }: CommandCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`glass-card rounded-xl border border-bot-primary/10 overflow-hidden transition-all duration-300 ${
        isExpanded ? "shadow-glow" : "hover-scale-subtle"
      }`}
    >
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-bot-primary/10 flex items-center justify-center text-bot-primary">
            {icon}
          </div>
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <span className="text-xs px-2 py-0.5 bg-bot-primary/10 text-bot-primary rounded-full">
              {category}
            </span>
          </div>
        </div>
        <button className="text-muted-foreground">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-4 pt-0 border-t border-bot-primary/10 animate-fade-in">
          <p className="text-muted-foreground mb-3">{description}</p>
          
          <div className="space-y-2">
            <div>
              <h4 className="text-sm font-medium">Cách dùng:</h4>
              <code className="block bg-bot-dark/5 p-2 rounded mt-1 text-sm overflow-x-auto">
                {usage}
              </code>
            </div>
            
            {example && (
              <div>
                <h4 className="text-sm font-medium">Ví dụ:</h4>
                <code className="block bg-bot-dark/5 p-2 rounded mt-1 text-sm overflow-x-auto">
                  {example}
                </code>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommandCard;
