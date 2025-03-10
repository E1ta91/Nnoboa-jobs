import { useLocation } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const searchLocation = queryParams.get("location") || "";
  const searchSector = queryParams.get("sector") || "";
  const searchKeyword = queryParams.get("keyword") || "";

  // Sample Data
  const data = [
    { id: 1, name: "Farm Worker", location: "Accra", sector: "agriculture" },
    { id: 2, name: "Software Engineer", location: "Kumasi", sector: "technology" },
    { id: 3, name: "Teacher", location: "Tamale", sector: "education" },
    { id: 4, name: "Nurse", location: "Cape Coast", sector: "health" },
    { id: 5, name: "Agricultural Specialist", location: "Accra", sector: "agriculture" },
  ];

  // Filter Data Based on Search Criteria
  const filteredResults = data.filter((item) => {
    return (
      (searchLocation === "" || item.location.toLowerCase().includes(searchLocation.toLowerCase())) &&
      (searchSector === "" || item.sector === searchSector) &&
      (searchKeyword === "" || item.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    );
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Search Results</h2>

      {filteredResults.length > 0 ? (
        filteredResults.map((item) => (
          <div key={item.id} className="p-2 border-b">
            {item.name} - {item.location} ({item.sector})
          </div>
        ))
      ) : (
        <p className="text-gray-600">No results found.</p>
      )}
    </div>
  );
};

export default ResultsPage;
