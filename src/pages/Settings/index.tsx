import {
  Squares2X2Icon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/20/solid";
import SettingGroup from "./components/SettingGroup";
import SettingItem from "./components/SettingItem";
import supabase from "@libs/supabaseClient";

const Setting = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  };

  return (
    <div>
      <div className="mb-6 space-y-0.5">
        <h1 className="font-semibold text-xl text-gray-900">Settings</h1>
        <p className="text-xs text-gray-400">Manage your settings here</p>
      </div>
      <section className="space-y-5">
        <SettingGroup title="Transaction">
          {[...Array(3).keys()].map((item) => (
            <SettingItem
              to="/transactions"
              key={item}
              title="Category"
              subtitle="Manage your category"
              icon={Squares2X2Icon}
            />
          ))}
        </SettingGroup>
        <SettingGroup title="Authentication">
          <SettingItem
            title="Logout"
            subtitle="Sign out from your account"
            iconWrapperClass="bg-red-500"
            icon={ArrowRightOnRectangleIcon}
            onClick={handleLogout}
          />
        </SettingGroup>
      </section>
    </div>
  );
};

export default Setting;
