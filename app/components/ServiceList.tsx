// components/ServiceList.tsx
export default function ServiceList() {
    return (
      <div className="mt-10 p-6 border-t border-gray-300">
        <h2 className="text-2xl font-semibold text-white">List of services</h2>
        <ul className="mt-4 space-y-4 text-white">
          <li className="p-4 border border-gray-200 rounded-lg">Service 1</li>
          <li className="p-4 border border-gray-200 rounded-lg">Service 2</li>
          <li className="p-4 border border-gray-200 rounded-lg">Service 3</li>
        </ul>
      </div>
    );
  }
  