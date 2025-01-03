import {
  IconApps,
  IconBox,
  IconBrandPocket,
  IconBriefcase,
  IconBuildingStore,
  IconChartPie,
  IconChevronLeft,
  IconCircleDot,
  IconCrown,
  IconDeviceMobile,
  IconFileDescription,
  IconHome,
  IconLayout,
  IconMessage,
  IconPuzzle,
  IconSettings,
  IconShare,
  IconShirt,
  IconSpeakerphone,
  IconSquareDot,
  IconTicket,
  IconUserMinus,
  IconUsers,
  IconVolume,
} from "@tabler/icons-react";
import avatar from "../../assets/Images/avatar.jpg";
import appleStore from "../../assets/Images/App_Store_Badge-Logo.wine.svg";
import googleStore from "../../assets/Images/googleStore.png";

export default function SideBar() {
  return (
    <aside className="bg-main  text-white text-right  text-sm fixed  w-[260px]  ">
      <div className="text-secondary px-4 font-bold flex items-center justify-end ">
        <p className="leading-4 text-lg">
          سلة <br /> salla
        </p>
        <IconBrandPocket size={60} />
      </div>

      <div className="overflow-y-auto scrollbar-left h-screen ">
        <div
          className=" flex flex-col  items-center justify-center gap-y-2 py-8
      "
        >
          <div className="relative">
            <img
              src={avatar}
              alt="avatar"
              className="object-cover rounded-full border-2 border-yellow-500 border-dashed w-16 h-16"
            />
            <div className="absolute bottom-full translate-y-1/2 text-xs bg-yellow-400 rounded-full flex items-center justify-center py-[2px]  px-2 text-black">
              <IconCrown size={15} /> سبيشل
            </div>
          </div>

          <p>متجر الهدايا</p>

          <div className="rounded-full border flex border-secondary w-3/5 text-xs items-center justify-between overflow-hidden ">
            <div className="w-8/12 flex items-center justify-center gap-x-2 text-white ">
              <a
                href="https://salla.sa/giftshop2024?expires=1735841144&identifier=2094195128&signature=fc89d7149eaa5776253ca7fb8876bf11b5e60d5a3fb237f8cafaa0f328039cbe"
                target="_blank"
              >
                زيارة المتجر
              </a>
              <IconChevronLeft size={12} />
            </div>
            <div className="w-4/12 py-[6px]  px-4 text-textColor bg-secondary">
              <IconShare size={15} />
            </div>
          </div>
        </div>

        <div>
          <ul className="mb-10">
            <li className="li-flex px-4">
              <IconHome /> الرئيسية
            </li>
            <li className="li-flex">
              <IconShirt /> المنتجات
            </li>
            <li className="li-flex">
              <IconBox /> الطلبات
            </li>
            <li className="li-flex">
              <IconUsers /> العملاء
            </li>
            <li className="li-flex">
              <IconChartPie /> التقارير
            </li>
            <li className="li-flex">
              <IconMessage /> الاسئلة و التقييمات
            </li>
            <li className="li-flex">
              <IconFileDescription /> الصفحات التعريفية
            </li>
            <li className="li-flex">
              <IconVolume /> الأدوات التسويقية
            </li>
          </ul>
          <ul className="mb-10">
            <li className="text-secondary px-4">قنوات االبيع </li>
            <li className="li-flex">
              <IconCircleDot /> محلي
            </li>
            <li className="li-flex">
              <IconSquareDot /> سلة بوينت
            </li>
          </ul>

          <ul className="mb-10">
            <li className="text-secondary px-4"> ادوات مساندة </li>
            <li className="li-flex ">
              <IconBriefcase />
              خدمات التاجر
            </li>
            <li className="li-flex">
              <IconUserMinus />
              المؤثرين
            </li>
            <li className="li-flex">
              <IconSpeakerphone />
              اعلانات سويلي
              <p className="bg-secondary text-textColor rounded-xl px-2 text-xs ms-auto  py-1">
                جديد
              </p>
            </li>
          </ul>
          <ul className="mb-10">
            <li className="text-secondary px-4"> الاعدادات </li>
            <li className="li-flex">
              <IconBuildingStore />
              باقة المتجر
            </li>
            <li className="li-flex">
              <IconSettings />
              اعدادات المتجر
            </li>
            <li className="li-flex">
              <IconTicket />
              المحفظة و الفواتير
            </li>
          </ul>
          <ul className="mb-10">
            <li className="text-secondary px-4"> مظهر المتجر </li>
            <li className="li-flex">
              <IconBuildingStore />
              متجر الثيمات
            </li>
            <li className="li-flex">
              <IconLayout />
              تصميم المتجر
              <p className="bg-secondary text-textColor rounded-xl px-2 text-xs ms-auto  py-1">
                جديد
              </p>
            </li>
            <li className="li-flex">
              <IconDeviceMobile />
              صانع التطبيقات
            </li>
          </ul>
          <ul className="mb-10">
            <li className="text-secondary px-4"> متجر التطبيقات </li>
            <li className="li-flex">
              <IconPuzzle />
              التطبيقات المثبتة
            </li>
            <li className="li-flex">
              <IconApps />
              زيارة متجر التطبيقات
            </li>
          </ul>
          <div className="mb-32">
            <p className="text-secondary px-4 text-center">تطبيق التاجر</p>
            <div className="flex justify-center  items-center">
              <img
                src={appleStore}
                alt="apple app store logo"
                className="w-28 cursor-pointer"
              />
              <img
                src={googleStore}
                alt="google app store logo"
                className="w-28 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
