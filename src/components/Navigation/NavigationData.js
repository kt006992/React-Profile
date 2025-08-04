// NavigationData.js - 导航栏所有数据配置

export const navigationData = {
  // Logo配置
  logo: {
    icon: "👋",
    text: "", // 如果需要文字logo可以在这里添加
    alt: "Home Logo"
  },

  // 主导航菜单项
  menuItems: [
    {
      key: "home",
      label: "Home",
      href: "#home",
      icon: "🏠", // 可选图标
      description: "Homepage with profile information"
    },
    {
      key: "projects",
      label: "Projects",
      href: "#projects",
      icon: "💼", // 可选图标
      description: "My portfolio projects"
    },
    {
      key: "notes",
      label: "Notes",
      href: "#notes",
      icon: "📝", // 可选图标
      description: "Technical notes and thoughts"
    }
  ],

  // 次要菜单项或状态显示
  secondaryItems: [
    {
      key: "services",
      label: "Continuely Updating ...",
      href: "#services",
      isPlaceholder: true, // 标记为占位符
      disabled: true
    }
  ],

  // CTA按钮配置
  ctaButton: {
    label: "Connect",
    action: "connect",
    variant: "primary", // primary, secondary, outline
    icon: "✉️" // 可选图标
  },

  // 联系人信息 (用于Connect按钮)
  contact: {
    email: "klaytime31@gmail.com",
    emailSubject: "Connection Request from Your Portfolio",
    emailTemplate: `Hi Runtian,

I visited your portfolio website and would like to connect with you.

Best regards,
[Your Name]`
  },

  // 导航栏样式配置
  styling: {
    position: "fixed", // fixed, sticky, static
    theme: "light", // light, dark, auto
    blur: true, // 是否启用背景模糊
    showIcons: false, // 是否在菜单项中显示图标
    animation: {
      hover: true,
      transition: "smooth" // smooth, fast, none
    }
  },

  // 响应式断点配置
  responsive: {
    mobileBreakpoint: 768,
    showMobileMenu: true,
    mobileMenuIcon: "☰",
    mobileCloseIcon: "✕"
  }
};

export default navigationData;