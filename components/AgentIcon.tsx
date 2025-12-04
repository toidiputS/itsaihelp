import React from "react";
import {
    Box,
    Rocket,
    Bot,
    PenTool,
    Mail,
    LayoutTemplate,
    MessageCircle,
    LineChart,
} from "lucide-react";

export type AgentIconVariant =
    | "promptVault"
    | "lab"
    | "assistants"
    | "contentDirector"
    | "emailArchitect"
    | "productPage"
    | "customerResponse"
    | "marketInsights";

interface AgentIconProps {
    variant: AgentIconVariant;
}

const iconMap: Record<AgentIconVariant, React.ReactNode> = {
    promptVault: <Box className="w-5 h-5 animate-icon-bounce" />,
    lab: <Rocket className="w-5 h-5 animate-icon-spin" />,
    assistants: <Bot className="w-5 h-5 animate-icon-pulse" />,
    contentDirector: <PenTool className="w-5 h-5 animate-icon-bounce" />,
    emailArchitect: <Mail className="w-5 h-5 animate-icon-pulse" />,
    productPage: <LayoutTemplate className="w-5 h-5 animate-icon-bounce" />,
    customerResponse: <MessageCircle className="w-5 h-5 animate-icon-pulse" />,
    marketInsights: <LineChart className="w-5 h-5 animate-icon-spin" />,
};

export const AgentIcon: React.FC<AgentIconProps> = ({ variant }) => {
    return (
        <span
            className="
        inline-flex items-center justify-center
        w-10 h-10 rounded-md
        bg-gradient-to-br from-yellow-400/15 to-yellow-600/5
        text-yellow-300
        shadow-[0_0_18px_rgba(250,204,21,0.18)]
        animate-agent-float
        border border-yellow-400/10
      "
        >
            {iconMap[variant]}
        </span>
    );
};
