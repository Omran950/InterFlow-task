import {
  IconCaretDownFilled,
  IconConfetti,
  IconGift,
  IconInfoCircle,
  IconLogout,
  IconMoon,
  IconNotification,
  IconPencil,
  IconPointFilled,
  IconSearch,
  IconUser,
  IconUserCircle,
} from "@tabler/icons-react";
import { useState } from "react";

export default function Header() {
  const [leftMenu, setLeftMenu] = useState(false);
  const [rigthMenu, setRirhtMenu] = useState(false);
  return (
    <div className="flex px-8 items-center justify-between py-2 bg-gray-100 bg-opacity-40">
      <div className="flex items-center gap-x-4 justify-start w-1/2">
        <div className="relative">
          <div
            className="flex items-center justify-center gap-x-1 cursor-pointer"
            onClick={() => setLeftMenu(!leftMenu)}
          >
            <IconCaretDownFilled stroke={1.25} size={18} />
            متجر الهدايا
            <IconUserCircle stroke={1.25} size={30} />
          </div>
          <div
            className={`w-48 rounded-sm absolute bg-gray-50 bg-gray-50 z-50  text-xs shadow top-full translate-y-4 text-gray-500 ${
              leftMenu ? "block" : "hidden"
            }`}
          >
            <p className="li-flex-left ">
              الملف الشخصي <IconUser size={20} />
            </p>
            <p className="li-flex-left ">
              التنبيهات <IconNotification size={20} />
            </p>
            <p className="li-flex-left ">
              تحجيثات المنصة <IconConfetti size={20} />
            </p>
            <p className="li-flex-left ">
              الاقتراحات
              <IconPencil size={20} />
            </p>
            <hr />
            <p className="li-flex-left text-red-500">
              تسجيل الخروج <IconLogout size={20} />
            </p>
          </div>
        </div>
        <button className="flex items-center justify-center ">
          تحديثات المنصة <IconPointFilled color="#F55157" size={18} />
        </button>
        <button className="rounded-full w-10 text-textColor h-10 border border-secondary flex items-center justify-center">
          <IconMoon />
        </button>
        <button className="rounded-full w-10 text-textColor h-10 border border-secondary flex items-center justify-center">
          <IconGift />
        </button>
      </div>

      <div className="flex items-center justify-end  w-1/2">
        <button className="bg-secondary text-textColor border border-secondary rounded-tl-md rounded-bl-md p-2">
          <IconSearch />
        </button>
        <div className="relative">
          <div
            className="flex items-center justify-center gap-x-1 p-2 border-t border-b  border-secondary cursor-pointer "
            onClick={() => setRirhtMenu(!rigthMenu)}
          >
            <IconCaretDownFilled stroke={1.25} size={18} />
            الطلبات
          </div>
          <div
            className={`left-0  right-0 rounded-sm absolute bg-gray-50  z-50  text-xs shadow top-full  text-gray-500 ${
              rigthMenu ? "block" : "hidden"
            }`}
          >
            <p className="li-flex-left "> الطلبات</p>
            <p className="li-flex-left ">المنتجات </p>
            <p className="li-flex-left ">العملاء</p>
          </div>
        </div>
        <div className="p-2 w-2/3 rounded-tr-md rounded-br-md  border text-textColor border-secondary relative">
          <input
            type="text"
            placeholder="ابحث باسم الطلب و اسم العميل و رقم الشحنة"
            className="w-full outline-none text-end bg-gray-50"
          />
          <IconInfoCircle
            className="absolute bg-gray-50 z-50   top-1/2 -translate-y-1/2 left-2"
            size={18}
          />
        </div>
      </div>
    </div>
  );
}
