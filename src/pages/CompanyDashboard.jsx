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
      <div className="bg-stone-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-2xl font-semibold text-stone-900">
          Company Not Found
        </div>
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
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        <h1 className="text-3xl md:text-4xl font-bold text-stone-900">
          {company.name} Dashboard
        </h1>
        <div className="mt-4 mb-10 h-1 w-16 rounded-full bg-emerald-600" />

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white p-6 rounded-2xl ring-1 ring-stone-100 shadow-sm">
            <h3 className="text-sm font-medium text-stone-600">Total Packages</h3>
            <p className="text-3xl font-bold text-stone-900 mt-2">
              {totalPackages}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl ring-1 ring-stone-100 shadow-sm">
            <h3 className="text-sm font-medium text-stone-600">Average Rating</h3>
            <p className="text-3xl font-bold text-stone-900 mt-2">
              ⭐ {avgRating.toFixed(1)}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl ring-1 ring-stone-100 shadow-sm">
            <h3 className="text-sm font-medium text-stone-600">Total Revenue (Demo)</h3>
            <p className="text-3xl font-bold text-emerald-700 mt-2">
              ৳ {totalRevenue}
            </p>
          </div>

        </div>

        {/* Package Table */}
        <div className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm overflow-hidden">

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-stone-50">
                <tr>
                  <th className="p-4 text-sm font-semibold text-stone-900">Title</th>
                  <th className="p-4 text-sm font-semibold text-stone-900">Location</th>
                  <th className="p-4 text-sm font-semibold text-stone-900">Category</th>
                  <th className="p-4 text-sm font-semibold text-stone-900">Price</th>
                  <th className="p-4 text-sm font-semibold text-stone-900">Rating</th>
                </tr>
              </thead>
              <tbody>
                {companyPackages.map((pkg) => (
                  <tr
                    key={pkg.id}
                    className="border-b border-stone-100 last:border-0 hover:bg-stone-50"
                  >
                    <td className="p-4 font-medium text-stone-900">{pkg.title}</td>
                    <td className="p-4 text-stone-600">{pkg.location}</td>
                    <td className="p-4 text-stone-600">{pkg.category}</td>
                    <td className="p-4 text-emerald-700 font-bold">৳{pkg.price}</td>
                    <td className="p-4 text-stone-600">⭐ {pkg.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CompanyDashboard;
