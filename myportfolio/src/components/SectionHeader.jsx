const SectionHeader = ({ Icon, title }) => (
  <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-4 border-emerald-500 inline-block pb-1">
    <Icon className="inline-block w-7 h-7 mr-3 text-emerald-500" />
    {title}
  </h2>
);

export default SectionHeader;
