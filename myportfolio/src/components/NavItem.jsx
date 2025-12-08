const NavItem = ({ Icon, text, targetId, activeSection, scrollToSection }) => {
  const isActive = activeSection === targetId;
  return (
    <a
      href={`#${targetId}`}
      onClick={(e) => { e.preventDefault(); scrollToSection(targetId); }}
      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-emerald-700 text-white shadow-lg' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{text}</span>
    </a>
  );
};

export default NavItem;
