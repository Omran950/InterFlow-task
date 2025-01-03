import { useState } from "react";
import { IconPlus } from "@tabler/icons-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function AddBranch({ addBranch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    _name: Yup.string()
      .required("يرجى إدخال اسم الفرع")
      .min(3, "الاسم يجب أن يكون على الأقل 3 أحرف"),
    phone: Yup.string()
      .required("يرجى إدخال رقم الهاتف")
      .matches(/^01[0-2,5]{1}[0-9]{8}$/, "يرجى إدخال رقم هاتف صالح"),
    address: Yup.string()
      .required("يرجى إدخال العنوان")
      .min(5, "العنوان يجب أن يكون على الأقل 5 أحرف"),
  });

  // Initial values for the form
  const initialValues = {
    _name: "",
    phone: "",
    address: "",
  };

  // Form submission handler
  const handleSubmit = (values, { resetForm }) => {
    addBranch(values); // Pass data to parent component
    resetForm(); // Reset the form after submission
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      {/* Add Branch Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-secondary text-textColor rounded-full px-4 py-2 flex items-center ms-auto my-6"
      >
        اضافة فرع / مستودع جديد
        <IconPlus />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                إضافة فرع / مستودع
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            {/* Formik Form */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* Branch Name */}
                  <div className="mb-4">
                    <label
                      htmlFor="_name"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      اسم الفرع
                    </label>
                    <Field
                      id="_name"
                      name="_name"
                      type="text"
                      placeholder="أدخل اسم الفرع"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <ErrorMessage
                      name="_name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      رقم الهاتف
                    </label>
                    <Field
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="أدخل رقم الهاتف"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Address */}
                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      العنوان
                    </label>
                    <Field
                      id="address"
                      name="address"
                      type="text"
                      placeholder="أدخل العنوان"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-secondary text-white rounded px-4 py-2 w-full hover:bg-secondary-dark transition duration-300"
                  >
                    إضافة
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
}
