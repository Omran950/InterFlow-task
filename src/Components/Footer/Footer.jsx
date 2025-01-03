import { IconMail } from "@tabler/icons-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-main flex items-center justify-center gap-x-8 pe-72 py-3 border-t-4 border-t-borderColor w-full bottom-0 fixed">
        <button className="bg-secondary text-textColor rounded-sm px-4 duration-75 py-2 hover:bg-secondaryHover">
          انشئ متجرك مجانا
        </button>
        <p className="text-white">
          !عجبتك التجربة؟ انطلق بتجارتك اليوم مع سلة بسهولة و بدون أي عمولة
        </p>
        <button className="bg-secondaryHover text-textColor absolute hover:bg-white duration-75 left-10 w-14 h-14 flex items-center justify-center rounded-full text-text bottom-full translate-y-1/2">
          <IconMail stroke={1.25} />
        </button>
      </footer>
    </>
  );
}
