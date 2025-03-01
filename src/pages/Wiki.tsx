
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Search, Book, ChevronRight, ChevronDown, Info, Bot, Server, Settings, Shield, AlertTriangle } from "lucide-react";

const Wiki = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "getting-started": true
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Wiki sections data
  const sections = [
    {
      id: "getting-started",
      title: "Bắt Đầu",
      icon: <Bot size={20} />,
      articles: [
        {
          id: "introduction",
          title: "Giới thiệu về Omh Bot",
          description: "Tổng quan về Omh Bot và các tính năng chính."
        },
        {
          id: "installation",
          title: "Thêm bot vào server",
          description: "Hướng dẫn thêm Omh Bot vào server Discord của bạn."
        },
        {
          id: "first-steps",
          title: "Các bước đầu tiên",
          description: "Hướng dẫn cài đặt và sử dụng Omh Bot lần đầu."
        }
      ]
    },
    {
      id: "commands",
      title: "Danh Sách Lệnh",
      icon: <Book size={20} />,
      articles: [
        {
          id: "moderation",
          title: "Lệnh quản lý",
          description: "Các lệnh liên quan đến quản lý server và thành viên."
        },
        {
          id: "utilities",
          title: "Lệnh tiện ích",
          description: "Các lệnh tiện ích hữu ích cho server của bạn."
        },
        {
          id: "info",
          title: "Lệnh thông tin",
          description: "Các lệnh cung cấp thông tin về server, thành viên và bot."
        }
      ]
    },
    {
      id: "configuration",
      title: "Cấu Hình",
      icon: <Settings size={20} />,
      articles: [
        {
          id: "permissions",
          title: "Thiết lập quyền hạn",
          description: "Hướng dẫn thiết lập quyền hạn cho bot và các lệnh."
        },
        {
          id: "prefix",
          title: "Thay đổi prefix",
          description: "Cách thay đổi prefix (tiền tố) cho các lệnh."
        },
        {
          id: "language",
          title: "Cài đặt ngôn ngữ",
          description: "Hướng dẫn thay đổi ngôn ngữ của bot."
        }
      ]
    },
    {
      id: "security",
      title: "Bảo Mật",
      icon: <Shield size={20} />,
      articles: [
        {
          id: "antilink",
          title: "Chống gửi link",
          description: "Hướng dẫn thiết lập tính năng chống gửi link trong server."
        },
        {
          id: "automod",
          title: "Tự động kiểm duyệt",
          description: "Thiết lập tính năng tự động kiểm duyệt nội dung."
        },
        {
          id: "raid-protection",
          title: "Bảo vệ khỏi tấn công",
          description: "Cách cấu hình bảo vệ server khỏi các cuộc tấn công."
        }
      ]
    },
    {
      id: "troubleshooting",
      title: "Xử Lý Sự Cố",
      icon: <AlertTriangle size={20} />,
      articles: [
        {
          id: "common-issues",
          title: "Vấn đề thường gặp",
          description: "Các vấn đề thường gặp và cách khắc phục."
        },
        {
          id: "permissions-issues",
          title: "Lỗi về quyền hạn",
          description: "Xử lý các lỗi liên quan đến quyền hạn của bot."
        },
        {
          id: "support",
          title: "Liên hệ hỗ trợ",
          description: "Cách liên hệ với đội ngũ hỗ trợ khi gặp vấn đề."
        }
      ]
    }
  ];

  const filteredSections = sections.map(section => ({
    ...section,
    articles: section.articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.articles.length > 0);

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
            <h1 className="text-3xl md:text-4xl font-bold">Wiki</h1>
            <p className="mt-4 text-muted-foreground">
              Tài liệu hướng dẫn sử dụng Omh Bot với đầy đủ thông tin về các lệnh và tính năng.
            </p>
          </motion.div>
          
          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm trong wiki..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-bot-primary/20 focus:outline-none focus:ring-2 focus:ring-bot-primary/50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            </div>
          </div>
          
          {/* Wiki content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card rounded-lg p-4 sticky top-24">
                <h3 className="text-lg font-bold mb-4">Nội dung</h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <div key={section.id}>
                      <button
                        className="w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-bot-primary/5 transition-colors"
                        onClick={() => toggleSection(section.id)}
                      >
                        <span className="flex items-center text-sm font-medium">
                          <span className="mr-2 text-bot-primary">{section.icon}</span>
                          {section.title}
                        </span>
                        <span>
                          {expandedSections[section.id] ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </span>
                      </button>
                      
                      {expandedSections[section.id] && (
                        <div className="ml-6 mt-1 space-y-1">
                          {section.articles.map((article) => (
                            <a
                              key={article.id}
                              href={`#${section.id}-${article.id}`}
                              className="block py-1 px-3 text-sm text-muted-foreground hover:text-bot-primary rounded-md hover:bg-bot-primary/5 transition-colors"
                            >
                              {article.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-2">
              {filteredSections.length > 0 ? (
                <div className="space-y-10">
                  {filteredSections.map((section) => (
                    <section key={section.id} id={section.id}>
                      <div className="flex items-center space-x-3 mb-6">
                        <span className="w-10 h-10 rounded-lg bg-bot-primary/10 flex items-center justify-center text-bot-primary">
                          {section.icon}
                        </span>
                        <h2 className="text-2xl font-bold">{section.title}</h2>
                      </div>
                      
                      <div className="space-y-6 ml-2">
                        {section.articles.map((article) => (
                          <div 
                            key={article.id} 
                            id={`${section.id}-${article.id}`}
                            className="glass-card rounded-lg p-6 hover-scale-subtle"
                          >
                            <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                            <p className="text-muted-foreground mb-4">{article.description}</p>
                            
                            {/* Placeholder content for demonstration */}
                            <div className="prose max-w-none">
                              <p>
                                Đây là nội dung chi tiết của bài viết "{article.title}". 
                                Nội dung này sẽ được thay thế bằng thông tin thực tế về cách sử dụng Omh Bot.
                              </p>
                              <p>
                                Nội dung sẽ bao gồm hướng dẫn chi tiết, hình ảnh minh họa, và các ví dụ cụ thể 
                                giúp người dùng hiểu rõ cách sử dụng tính năng.
                              </p>
                              
                              {article.id === "introduction" && (
                                <div className="mt-4 p-4 bg-bot-primary/5 rounded-lg">
                                  <h4 className="font-bold mb-2">Giới thiệu về Omh Bot</h4>
                                  <p>
                                    Omh Bot là một bot Discord đa năng được tối ưu hóa cho người dùng Việt Nam. 
                                    Bot cung cấp hơn 30 lệnh hữu ích cho việc quản lý server, bảo mật, 
                                    và nhiều tiện ích khác.
                                  </p>
                                  <p className="mt-2">
                                    Với giao diện tiếng Việt và tính năng đặc biệt phù hợp với cộng đồng Việt Nam, 
                                    Omh Bot là lựa chọn hoàn hảo cho các server Discord Việt Nam.
                                  </p>
                                </div>
                              )}
                              
                              {article.id === "installation" && (
                                <div className="mt-4">
                                  <h4 className="font-bold mb-2">Các bước thêm bot vào server:</h4>
                                  <ol className="list-decimal pl-5 space-y-2">
                                    <li>Truy cập trang web chính thức của Omh Bot</li>
                                    <li>Nhấn vào nút "Thêm Bot Vào Server"</li>
                                    <li>Đăng nhập vào tài khoản Discord của bạn nếu được yêu cầu</li>
                                    <li>Chọn server bạn muốn thêm bot vào</li>
                                    <li>Xác nhận các quyền cần thiết cho bot</li>
                                    <li>Hoàn tất quá trình thêm bot</li>
                                  </ol>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="glass-card rounded-lg p-8 text-center">
                  <Info size={36} className="mx-auto text-bot-primary mb-3" />
                  <h3 className="text-xl font-medium mb-2">Không tìm thấy kết quả</h3>
                  <p className="text-muted-foreground">
                    Không tìm thấy bài viết nào phù hợp với từ khóa "{searchTerm}".
                  </p>
                  <button 
                    className="mt-4 px-4 py-2 bg-bot-primary text-white rounded-md hover:bg-bot-secondary transition-colors"
                    onClick={() => setSearchTerm("")}
                  >
                    Xóa tìm kiếm
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wiki;
