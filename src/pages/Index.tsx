import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { Check, Bot, Server, MessageSquare, Info, User, Settings, AlertTriangle } from "lucide-react";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const commonFeatures = [
    {
      icon: <Bot size={24} />,
      title: "Quản lý Server",
      description: "Quản lý server Discord với các lệnh ban, kick, mute và nhiều tính năng khác."
    },
    {
      icon: <Settings size={24} />,
      title: "Lọc nội dung",
      description: "Tự động phát hiện và xóa link không mong muốn, chống spam và nội dung xấu."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Kiểm soát Chat",
      description: "Điều chỉnh tốc độ chat, xóa nhiều tin nhắn cùng lúc, và quản lý kênh chat."
    },
    {
      icon: <User size={24} />,
      title: "Quản lý Member",
      description: "Thay đổi biệt danh, thêm/xóa role, kiểm tra thông tin người dùng."
    }
  ];

  const commandCategories = [
    { name: "Quản lý", count: 12 },
    { name: "Tiện ích", count: 10 },
    { name: "Thông tin", count: 8 },
    { name: "Vui vẻ", count: 5 },
    { name: "Điều chỉnh", count: 4 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Tính năng nổi bật
              </h2>
              <p className="mt-4 text-muted-foreground">
                Omh Bot đi kèm với nhiều tính năng hữu ích giúp bạn quản lý server Discord dễ dàng hơn.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {commonFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6 hover-scale-subtle"
                >
                  <div className="w-12 h-12 rounded-lg bg-bot-primary/10 flex items-center justify-center text-bot-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Command preview section */}
        <section className="py-16 bg-bot-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  Hơn 30 lệnh hữu ích
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Omh Bot cung cấp đầy đủ các lệnh cần thiết cho việc quản lý server Discord của bạn,
                  từ quản lý thành viên đến các tiện ích thú vị.
                </p>
                
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {commandCategories.map((category, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-bot-primary mb-1">
                        {category.count}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {category.name}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link to="/commands" className="btn-primary inline-flex items-center">
                    Xem tất cả lệnh
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 overflow-hidden"
              >
                <div className="bg-bot-dark p-4 rounded-lg text-white font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-3 opacity-70">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-xs">Terminal</span>
                  </div>
                  
                  <div className="space-y-2 overflow-y-auto max-h-80 scroll-fade-mask">
                    <div>
                      <span className="text-green-400">user@discord</span>
                      <span className="text-white">:</span>
                      <span className="text-blue-400">~</span>
                      <span className="text-white">$ </span>
                      <span className="text-white">/help</span>
                    </div>
                    
                    <div className="pb-2">
                      <div className="text-yellow-400 mb-1">== Omh Bot - Danh sách lệnh ==</div>
                      
                      <div className="grid grid-cols-1 gap-1">
                        <div>
                          <span className="text-purple-400">/ban</span>
                          <span className="text-gray-400"> - Cấm người dùng khỏi server</span>
                        </div>
                        <div>
                          <span className="text-purple-400">/kick</span>
                          <span className="text-gray-400"> - Đuổi người dùng khỏi server</span>
                        </div>
                        <div>
                          <span className="text-purple-400">/mute</span>
                          <span className="text-gray-400"> - Cấm chat người dùng</span>
                        </div>
                        <div>
                          <span className="text-purple-400">/purge</span>
                          <span className="text-gray-400"> - Xóa nhiều tin nhắn</span>
                        </div>
                        <div>
                          <span className="text-purple-400">/slowmode</span>
                          <span className="text-gray-400"> - Đặt chế độ chat chậm</span>
                        </div>
                        <div>
                          <span className="text-purple-400">/avatar</span>
                          <span className="text-gray-400"> - Xem avatar người dùng</span>
                        </div>
                        <div>
                          <span className="text-purple-400">/weather</span>
                          <span className="text-gray-400"> - Xem thời tiết</span>
                        </div>
                        <div>
                          <span className="text-purple-400">/info</span>
                          <span className="text-gray-400"> - Xem thông tin bot</span>
                        </div>
                      </div>
                      
                      <div className="mt-2 text-gray-400">
                        Gõ /help [lệnh] để xem thông tin chi tiết về lệnh.
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-green-400">user@discord</span>
                      <span className="text-white">:</span>
                      <span className="text-blue-400">~</span>
                      <span className="text-white">$ </span>
                      <span className="text-white">/help ban</span>
                    </div>
                    
                    <div>
                      <div className="text-yellow-400 mb-1">== Lệnh: ban ==</div>
                      <div className="text-gray-400">Cấm người dùng khỏi server của bạn.</div>
                      <div className="mt-1">
                        <span className="text-white">Cách dùng: </span>
                        <span className="text-purple-400">/ban [người dùng] [lý do]</span>
                      </div>
                      <div className="mt-1">
                        <span className="text-white">Ví dụ: </span>
                        <span className="text-purple-400">/ban @user Vi phạm nội quy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-20 animated-gradient">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sẵn sàng nâng cấp server Discord của bạn?
              </h2>
              <p className="text-white/80 mb-8">
                Thêm Omh Bot vào server của bạn ngay hôm nay và trải nghiệm các tính năng tuyệt vời!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=1234567890&permissions=8&scope=bot%20applications.commands"
                  className="bg-white text-bot-primary px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Thêm Bot Vào Server
                </a>
                <a
                  href="https://discord.gg/evxSDHQu5N"
                  className="discord-button"
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
                  Tham Gia Server Hỗ Trợ
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
