import { IconCaretDownFilled, IconHome, IconWheel } from "@tabler/icons-react";

export default function Tabs() {
  return (
    <div className="flex items-center justify-between my-7">
      <div className="text-sm flex items-center gap-x-1 rounded-full bg-secondary px-4 py-1 text-textColor cursor-pointer">
        <IconCaretDownFilled size={18} />
        مساعدة
        <IconWheel size={18} />
      </div>
      <div className="flex items-center gap-x-2 text-textColor text-sm cursor-pointer">
        الرئيسية / اعدادات المتجر / الفروع
        <IconHome size={18} />
      </div>
    </div>
  );
}
