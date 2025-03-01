
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StatusIndicator from "../components/StatusIndicator";
import { motion } from "framer-motion";
import { Clock, Cpu, Globe, Server, ShieldCheck, Users } from "lucide-react";

type StatusType = "online" | "offline" | "degraded";

interface StatusData {
  system: {
    name: string;
    status: StatusType;
    uptime: string;
    response_time: string;
  };
  api: {
    name: string;
    status: StatusType;
    uptime: string;
    response_time: string;
  };
  commands: {
    name: string;
    status: StatusType;
    uptime: string;
    response_time: string;
  };
  database: {
    name: string;
    status: StatusType;
    uptime: string;
    response_time: string;
  };
  website: {
    name: string;
    status: StatusType;
    uptime: string;
    response_time: string;
  };
  security: {
    name: string;
    status: StatusType;
    uptime: string;
    response_time: string;
  };
}

interface UserData {
  id: string;
  username: string;
  status: string;
}

const Status = () => {
  const [statusData, setStatusData] = useState<StatusData>({
    system: {
      name: "Hệ thống",
      status: "online",
      uptime: "99.9%",
      response_time: "120ms",
    },
    api: {
      name: "API",
      status: "online",
      uptime: "99.7%",
      response_time: "150ms",
    },
    commands: {
      name: "Lệnh",
      status: "online",
      uptime: "99.8%",
      response_time: "200ms",
    },
    database: {
      name: "Cơ sở dữ liệu",
      status: "online",
      uptime: "99.5%",
      response_time: "90ms",
    },
    website: {
      name: "Website",
      status: "online",
      uptime: "99.9%",
      response_time: "250ms",
    },
    security: {
      name: "Bảo mật",
      status: "online",
      uptime: "100%",
      response_time: "100ms",
    },
  });

  const [activeUsers, setActiveUsers] = useState<UserData[]>([
    { id: "1", username: "User1", status: "online" },
    { id: "2", username: "User2", status: "online" },
    { id: "3", username: "User3", status: "online" },
    { id: "4", username: "User4", status: "online" },
    { id: "5", username: "User5", status: "online" },
  ]);

  // Simulate random status changes for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      const statuses: StatusType[] = ["online", "degraded", "offline"];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      const randomSystem = Object.keys(statusData)[
        Math.floor(Math.random() * Object.keys(statusData).length)
      ] as keyof StatusData;

      setStatusData((prev) => ({
        ...prev,
        [randomSystem]: {
          ...prev[randomSystem],
          status: randomStatus,
        },
      }));
    }, 15000);

    return () => clearInterval(interval);
  }, [statusData]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Trạng thái hệ thống</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Theo dõi trạng thái của tất cả các dịch vụ và hệ thống của Omh Bot.
            Trang này tự động cập nhật mỗi 60 giây.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <StatusCard
            title="Hệ thống"
            status={statusData.system.status}
            uptime={statusData.system.uptime}
            responseTime={statusData.system.response_time}
            icon={<Server className="h-6 w-6" />}
          />
          <StatusCard
            title="API"
            status={statusData.api.status}
            uptime={statusData.api.uptime}
            responseTime={statusData.api.response_time}
            icon={<Globe className="h-6 w-6" />}
          />
          <StatusCard
            title="Lệnh"
            status={statusData.commands.status}
            uptime={statusData.commands.uptime}
            responseTime={statusData.commands.response_time}
            icon={<Clock className="h-6 w-6" />}
          />
          <StatusCard
            title="Cơ sở dữ liệu"
            status={statusData.database.status}
            uptime={statusData.database.uptime}
            responseTime={statusData.database.response_time}
            icon={<Cpu className="h-6 w-6" />}
          />
          <StatusCard
            title="Website"
            status={statusData.website.status}
            uptime={statusData.website.uptime}
            responseTime={statusData.website.response_time}
            icon={<Globe className="h-6 w-6" />}
          />
          <StatusCard
            title="Bảo mật"
            status={statusData.security.status}
            uptime={statusData.security.uptime}
            responseTime={statusData.security.response_time}
            icon={<ShieldCheck className="h-6 w-6" />}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/50 dark:bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20 dark:border-white/10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-bot-primary" />
            <h2 className="text-xl font-semibold">Người dùng đang hoạt động</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2 px-4 text-left">ID</th>
                  <th className="py-2 px-4 text-left">Tên người dùng</th>
                  <th className="py-2 px-4 text-left">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {activeUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 px-4">{user.id}</td>
                    <td className="py-2 px-4">{user.username}</td>
                    <td className="py-2 px-4">
                      <span className="inline-flex items-center">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

interface StatusCardProps {
  title: string;
  status: StatusType;
  uptime: string;
  responseTime: string;
  icon: React.ReactNode;
}

const StatusCard = ({ title, status, uptime, responseTime, icon }: StatusCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="text-bot-primary">{icon}</div>
          <h3 className="font-medium text-lg">{title}</h3>
        </div>
        <StatusIndicator name={title} status={status} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Uptime:</span>
          <span className="font-medium">{uptime}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Thời gian phản hồi:</span>
          <span className="font-medium">{responseTime}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Status;
