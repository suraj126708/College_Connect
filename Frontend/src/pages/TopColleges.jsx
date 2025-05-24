export default function CollegeTable() {
  // Sample data
  const colleges = [
    {
      rank: 1,
      institute_code: "3001",
      name: "College of Engineering, Pune",
      university_region: "Pune",
      cutoffs: {
        Computer: 98.75,
        IT: 97.5,
        "E&Tc": 95.2,
        Mechanical: 88.4,
        Electrical: 87.25,
        Civil: 82.1,
      },
    },
    {
      rank: 2,
      institute_code: "3002",
      name: "VJTI Mumbai",
      university_region: "Mumbai",
      cutoffs: {
        Computer: 97.9,
        IT: 96.8,
        "E&Tc": 94.25,
        Mechanical: 89.9,
        Electrical: 88.2,
        Civil: 83.75,
      },
    },
    {
      rank: 50,
      institute_code: "3190",
      name: "Terna Engineering College, Nerul, Navi Mumbai",
      university_region: "Mumbai",
      cutoffs: {
        Computer: 90.95,
        IT: 87.96,
        "E&Tc": 66.99,
        Mechanical: 33.27,
        Electrical: 75.09,
        Civil: null,
      },
    },
  ];

  // Format cutoff values
  const formatCutoff = (value) => {
    if (value === null) return "N/A";
    return value.toFixed(2);
  };

  // Simple inline styles to avoid any Tailwind issues
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const headerStyle = {
    backgroundColor: "#f3f4f6",
    padding: "8px",
    textAlign: "left",
    borderBottom: "1px solid #e5e7eb",
  };

  const cellStyle = {
    padding: "8px",
    borderBottom: "1px solid #e5e7eb",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Engineering College Rankings
      </h1>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Rank</th>
            <th style={headerStyle}>Code</th>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Region</th>
            <th style={headerStyle}>Computer</th>
            <th style={headerStyle}>IT</th>
            <th style={headerStyle}>E&Tc</th>
            <th style={headerStyle}>Mechanical</th>
            <th style={headerStyle}>Electrical</th>
            <th style={headerStyle}>Civil</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college) => (
            <tr key={college.rank}>
              <td style={cellStyle}>{college.rank}</td>
              <td style={cellStyle}>{college.institute_code}</td>
              <td style={cellStyle}>{college.name}</td>
              <td style={cellStyle}>{college.university_region}</td>
              <td style={cellStyle}>
                {formatCutoff(college.cutoffs.Computer)}
              </td>
              <td style={cellStyle}>{formatCutoff(college.cutoffs.IT)}</td>
              <td style={cellStyle}>{formatCutoff(college.cutoffs["E&Tc"])}</td>
              <td style={cellStyle}>
                {formatCutoff(college.cutoffs.Mechanical)}
              </td>
              <td style={cellStyle}>
                {formatCutoff(college.cutoffs.Electrical)}
              </td>
              <td style={cellStyle}>{formatCutoff(college.cutoffs.Civil)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
