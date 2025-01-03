import {
  IconBuildingStore,
  IconEdit,
  IconInfinity,
  IconTrash,
} from "@tabler/icons-react";

export default function AllBranches({ branches, deleteBranch }) {
  return (
    <div className="border rounded-md  mb-32">
      <div className="flex items-center justify-between px-2 bg-gray-100 bg-opacity-40 py-4 ">
        <div className="flex items-center border border-gray-200 rounded-md">
          <div className="bg-secondary bg-opacity-35 text-textColor p-2">
            <IconInfinity />
          </div>
          <p className="p-2 ms-10">عدد لا محدود</p>
        </div>

        <div className="flex items-center gap-x-2 text-gray-500">
          الفروع و المستودعات : {branches.length}
          <IconBuildingStore />
        </div>
      </div>

      <div className="py-3">
        {branches.length > 0 ? (
          branches.map((branch, index) => {
            return (
              <div
                dir="rtl"
                className="grid grid-cols-12   p-4 gap-x-3 bg-white rounded-lg  cursor-pointer hover:bg-mainHover hover:text-white"
                key={index}
              >
                <p>{index + 1}</p>
                <p className="col-span-3">{branch._name}</p>
                <p className="col-span-3">{branch.phone}</p>
                <p className="col-span-3">{branch.address}</p>

                <button className="text-blue-500 hover:text-blue-700 transition duration-300">
                  <IconEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700 transition duration-300"
                  onClick={() => deleteBranch(index)}
                >
                  <IconTrash />
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-center h-40 text-textColor mt-20">لا يوجد فروع</p>
        )}
      </div>
    </div>
  );
}
