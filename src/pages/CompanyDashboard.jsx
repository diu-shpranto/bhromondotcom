import { useParams } from "react-router-dom";
import packagesData from "../data/packagesData";
import companiesData from "../data/companiesData";

const CompanyDashboard = () => {
  const { id } = useParams();

  const company = companiesData.find(
    (c) => c.id === parseInt(id)
  );

  const companyPackages = packagesData.filter(
    (pkg) => pkg.companyId === parseInt(id)
  );

  if (!company) {
    return (
      <div className="container-apple py-20 text-center text-2xl">
        Company Not Found
      </div>
    );
  }

  const totalPackages = companyPackages.length;
  const avgRating =
    companyPackages.reduce((acc, pkg) => acc + pkg.rating, 0) /
    (totalPackages || 1);

  const totalRevenue = companyPackages.reduce(
    (acc, pkg) => acc + pkg.price,
    0
  );

  return (
    <div className="container-apple py-16">

      <h1 className="text-3xl font-bold mb-10">
        {company.name} Dashboard
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-gray-500">Total Packages</h3>
          <p className="text-3xl font-bold mt-2">
            {totalPackages}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-gray-500">Average Rating</h3>
          <p className="text-3xl font-bold mt-2">
            ⭐ {avgRating.toFixed(1)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-gray-500">Total Revenue (Demo)</h3>
          <p className="text-3xl font-bold mt-2">
            ৳ {totalRevenue}
          </p>
        </div>

      </div>

      {/* Package Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Location</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Rating</th>
            </tr>
          </thead>
          <tbody>
            {companyPackages.map((pkg) => (
              <tr
                key={pkg.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{pkg.title}</td>
                <td className="p-4">{pkg.location}</td>
                <td className="p-4">{pkg.category}</td>
                <td className="p-4">৳{pkg.price}</td>
                <td className="p-4">⭐ {pkg.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
};

export default CompanyDashboard;