interface SettingGroupProps {
  title: string;
  children?: React.ReactNode;
}

const SettingGroup = ({ title, children }: SettingGroupProps) => {
  return (
    <div className="space-y-2">
      <h2 className="uppercase text-xs font-semibold text-gray-400">{title}</h2>
      <div className="divide-y divide-gray-100 bg-white border shadow-sm rounded-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default SettingGroup;
