
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommandCard from "../components/CommandCard";
import { Info, MessageSquare, User, Users, Server, Bot, Check, X, AlertTriangle, Settings } from "lucide-react";

// Command data based on the provided list
const allCommands = [
  {
    name: "add-emoji",
    description: "Thêm emoji vào server",
    usage: "/add-emoji [link] [tên]",
    example: "/add-emoji https://example.com/emoji.png cool_emoji",
    category: "Quản lý",
    icon: <Server size={16} />
  },
  {
    name: "add-role",
    description: "Thêm role cho thành viên",
    usage: "/add-role [@người dùng] [@role]",
    example: "/add-role @user @Moderator",
    category: "Quản lý",
    icon: <Users size={16} />
  },
  {
    name: "antilink",
    description: "Bật/tắt chế độ chống gửi link",
    usage: "/antilink [on/off]",
    example: "/antilink on",
    category: "Bảo mật",
    icon: <AlertTriangle size={16} />
  },
  {
    name: "autokick",
    description: "Tự động kick người dùng khi vi phạm điều kiện",
    usage: "/autokick [điều kiện]",
    example: "/autokick spam",
    category: "Bảo mật",
    icon: <Settings size={16} />
  },
  {
    name: "avatar",
    description: "Hiển thị avatar của người dùng",
    usage: "/avatar [@người dùng]",
    example: "/avatar @user",
    category: "Tiện ích",
    icon: <User size={16} />
  },
  {
    name: "ban",
    description: "Cấm người dùng khỏi server",
    usage: "/ban [@người dùng] [lý do]",
    example: "/ban @user Vi phạm nội quy",
    category: "Quản lý",
    icon: <X size={16} />
  },
  {
    name: "channelinfo",
    description: "Hiển thị thông tin về kênh",
    usage: "/channelinfo [#kênh]",
    example: "/channelinfo #general",
    category: "Thông tin",
    icon: <Info size={16} />
  },
  {
    name: "check-host",
    description: "Kiểm tra thông tin về host/IP",
    usage: "/check-host [host/IP]",
    example: "/check-host example.com",
    category: "Tiện ích",
    icon: <Info size={16} />
  },
  {
    name: "help",
    description: "Hiển thị danh sách lệnh và thông tin",
    usage: "/help [lệnh]",
    example: "/help ban",
    category: "Tiện ích",
    icon: <Info size={16} />
  },
  {
    name: "info",
    description: "Hiển thị thông tin về bot",
    usage: "/info",
    category: "Thông tin",
    icon: <Bot size={16} />
  },
  {
    name: "kick",
    description: "Đuổi người dùng khỏi server",
    usage: "/kick [@người dùng] [lý do]",
    example: "/kick @user Spam",
    category: "Quản lý",
    icon: <X size={16} />
  },
  {
    name: "mute",
    description: "Tắt tiếng người dùng trong server",
    usage: "/mute [@người dùng] [thời gian] [lý do]",
    example: "/mute @user 1h Spam chat",
    category: "Quản lý",
    icon: <X size={16} />
  },
  {
    name: "ping",
    description: "Kiểm tra độ trễ của bot",
    usage: "/ping",
    category: "Tiện ích",
    icon: <Info size={16} />
  },
  {
    name: "purge",
    description: "Xóa nhiều tin nhắn cùng lúc",
    usage: "/purge [số lượng]",
    example: "/purge 10",
    category: "Quản lý",
    icon: <MessageSquare size={16} />
  },
  {
    name: "server",
    description: "Hiển thị thông tin về server",
    usage: "/server",
    category: "Thông tin",
    icon: <Server size={16} />
  },
  {
    name: "slowmode",
    description: "Thiết lập chế độ chat chậm cho kênh",
    usage: "/slowmode [thời gian (giây)]",
    example: "/slowmode 5",
    category: "Quản lý",
    icon: <Settings size={16} />
  },
  {
    name: "status",
    description: "Kiểm tra trạng thái của bot",
    usage: "/status",
    category: "Thông tin",
    icon: <Info size={16} />
  },
  {
    name: "unban",
    description: "Hủy cấm người dùng",
    usage: "/unban [ID người dùng]",
    example: "/unban 123456789012345678",
    category: "Quản lý",
    icon: <Check size={16} />
  },
  {
    name: "unmute",
    description: "Bỏ tắt tiếng người dùng",
    usage: "/unmute [@người dùng]",
    example: "/unmute @user",
    category: "Quản lý",
    icon: <Check size={16} />
  },
  {
    name: "weather",
    description: "Hiển thị thông tin thời tiết của địa điểm",
    usage: "/weather [địa điểm]",
    example: "/weather Hà Nội",
    category: "Tiện ích",
    icon: <Info size={16} />
  },
  {
    name: "whois",
    description: "Hiển thị thông tin về người dùng",
    usage: "/whois [@người dùng]",
    example: "/whois @user",
    category: "Thông tin",
    icon: <User size={16} />
  }
];

const categories = [
  "Tất cả",
  "Quản lý",
  "Bảo mật",
  "Tiện ích",
  "Thông tin"
];

const Commands = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCommands, setFilteredCommands] = useState(allCommands);

  useEffect(() => {
    // Filter commands based on category and search term
    const filtered = allCommands.filter(command => {
      const matchesCategory = selectedCategory === "Tất cả" || command.category === selectedCategory;
      const matchesSearch = command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           command.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
    
    setFilteredCommands(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold">Danh Sách Lệnh</h1>
            <p className="mt-4 text-muted-foreground">
              Khám phá các lệnh hữu ích của Omh Bot. Sử dụng prefix <code className="bg-bot-primary/10 px-1.5 py-0.5 rounded text-bot-primary">!</code> hoặc <code className="bg-bot-primary/10 px-1.5 py-0.5 rounded text-bot-primary">/</code> trước mỗi lệnh.
            </p>
          </motion.div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-bot-primary text-white"
                        : "bg-bot-primary/10 text-bot-primary hover:bg-bot-primary/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm lệnh..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 rounded-full border border-bot-primary/20 focus:outline-none focus:ring-2 focus:ring-bot-primary/50"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCommands.length > 0 ? (
              filteredCommands.map((command) => (
                <motion.div
                  key={command.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CommandCard
                    name={command.name}
                    description={command.description}
                    usage={command.usage}
                    example={command.example}
                    category={command.category}
                    icon={command.icon}
                  />
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <AlertTriangle size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Không tìm thấy lệnh</h3>
                <p className="text-muted-foreground">
                  Không tìm thấy lệnh phù hợp với tìm kiếm "{searchTerm}".
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Commands;
