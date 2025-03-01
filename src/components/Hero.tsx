
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Bot, Server, MessageSquare, Discord } from "lucide-react";

const Hero = () => {
  const [commandCount, setCommandCount] = useState(0);
  const targetCommandCount = 39; // Number of commands from the user data
  const [discordMembers, setDiscordMembers] = useState(0);
  const targetDiscordMembers = 150; // Example number

  useEffect(() => {
    const timer = setTimeout(() => {
      setCommandCount(prevCount => {
        if (prevCount < targetCommandCount) {
          return prevCount + 1;
        }
        return prevCount;
      });
    }, 50);
    
    return () => clearTimeout(timer);
  }, [commandCount]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDiscordMembers(prevCount => {
        if (prevCount < targetDiscordMembers) {
          return prevCount + 1;
        }
        return prevCount;
      });
    }, 30);
    
    return () => clearTimeout(timer);
  }, [discordMembers]);

  const features = [
    "Quản lý server",
    "Lọc link, chống spam",
    "Tạo và quản lý role",
    "Tìm kiếm thông tin",
    "Kiểm tra thời tiết",
    "Tích hợp AI",
    "Điều chỉnh tốc độ chat",
    "Kiểm soát thành viên"
  ];

  return (
    <div className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background decor */}
      <div className="absolute -top-10 right-0 w-72 h-72 bg-bot-primary/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 -left-10 w-60 h-60 bg-discord/10 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-bot-primary/10 text-bot-primary font-medium text-sm mb-4">
                Discord Bot Tiếng Việt
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Nâng tầm server Discord với{" "}
                <span className="text-gradient">Omh Bot</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Bot đa năng với hơn 30 tính năng thiết thực, được tối ưu cho người dùng Việt Nam.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-2"
            >
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=1234567890&permissions=8&scope=bot%20applications.commands"
                className="btn-primary text-center text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Thêm Bot Vào Server
              </a>
              <a
                href="https://discord.gg/evxSDHQu5N"
                className="discord-button text-center text-base relative group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  fill="currentColor"
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
                <span>Tham Gia Server Hỗ Trợ</span>
                <div className="absolute right-0 top-0 -mt-2 -mr-2 discord-badge">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  <span>{discordMembers}+ online</span>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                  <Check size={18} className="text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-2xl p-6 shadow-glow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-bot-primary/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="flex flex-col space-y-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-bot-primary flex items-center justify-center text-white">
                  <Bot size={32} />
                </div>
                
                <h3 className="text-2xl font-bold">Omh Bot</h3>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center bg-white/70 dark:bg-white/10 backdrop-blur p-3 rounded-lg">
                    <div className="text-3xl font-bold text-bot-primary">{commandCount}</div>
                    <div className="text-xs text-muted-foreground mt-1">Lệnh</div>
                  </div>
                  <div className="flex flex-col items-center bg-white/70 dark:bg-white/10 backdrop-blur p-3 rounded-lg">
                    <div className="text-3xl font-bold text-discord">99.9<span className="text-base">%</span></div>
                    <div className="text-xs text-muted-foreground mt-1">Uptime</div>
                  </div>
                  <div className="flex flex-col items-center bg-white/70 dark:bg-white/10 backdrop-blur p-3 rounded-lg">
                    <div className="text-3xl font-bold text-bot-secondary">100+</div>
                    <div className="text-xs text-muted-foreground mt-1">Server</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 mt-2">
                  <div className="w-10 h-10 rounded-full bg-discord flex items-center justify-center text-white">
                    <Server size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Server Hỗ Trợ</div>
                    <div className="text-xs text-muted-foreground">discord.gg/evxSDHQu5N</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-bot-secondary flex items-center justify-center text-white">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Prefix</div>
                    <div className="text-xs text-muted-foreground"><code className="bg-bot-primary/10 px-1.5 py-0.5 rounded text-bot-primary">!</code> hoặc <code className="bg-bot-primary/10 px-1.5 py-0.5 rounded text-bot-primary">/</code></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
