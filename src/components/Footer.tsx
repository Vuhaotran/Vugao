
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bot-primary/5 py-12 border-t border-bot-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-bot-primary flex items-center justify-center text-white font-bold text-sm">
                O
              </div>
              <h3 className="text-lg font-bold">Omh Bot</h3>
            </div>
            <p className="text-muted-foreground">
              Bot Discord đa năng cho server của bạn với hơn 30 lệnh hữu ích.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                Made with <Heart size={14} className="mx-1 text-red-500" /> in Vietnam
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Liên Kết</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-bot-primary transition-colors">
                Trang Chủ
              </Link>
              <Link to="/commands" className="text-muted-foreground hover:text-bot-primary transition-colors">
                Lệnh
              </Link>
              <Link to="/status" className="text-muted-foreground hover:text-bot-primary transition-colors">
                Trạng Thái
              </Link>
              <Link to="/wiki" className="text-muted-foreground hover:text-bot-primary transition-colors">
                Wiki
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Tham Gia</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=1234567890&permissions=8&scope=bot%20applications.commands"
                className="text-muted-foreground hover:text-bot-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Thêm Bot
              </a>
              <a
                href="https://discord.gg/evxSDHQu5N"
                className="group relative flex items-center text-discord hover:text-discord-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  fill="currentColor"
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
                Server Hỗ Trợ
                <span className="absolute -top-1 -right-6 inline-flex items-center justify-center px-2 py-1 text-xs leading-none text-red-100 bg-discord rounded-full group-hover:animate-pulse">
                  Hot
                </span>
              </a>
              <a
                href="https://github.com/omh-bot"
                className="text-muted-foreground hover:text-bot-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-bot-primary/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Omh Bot. Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
