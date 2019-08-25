import React from "react";
import MaterialTable from "material-table";

function App() {
  const [state, setState] = React.useState({
    columns: [
      {
        title: "Property Type",
        field: "propertyType",
        lookup: { 10: "House", 20: "Apartment" }
      },
      { title: "Unit number", field: "unitNumber", type: "numeric" },
      { title: "Street number", field: "streetNumber", type: "numeric" },
      { title: "Street", field: "street" },
      { title: "Suburb", field: "suburb" },
      { title: "Post Code", field: "postCode", type: "numeric" },
      {
        title: "State",
        field: "state",
        lookup: { 1: "NSW", 2: "VIC", 3: "QLD", 4: "SA", 5: "TAS", 6: "WA" }
      }
    ],
    data: [
      {
        streetNumber: 36,
        street: "Wyndham Street",
        suburb: "Alexandria",
        state: 1,
        postCode: 2015
      },
      {
        unitNumber: 2,
        streetNumber: 18,
        street: "Raglan Street",
        suburb: "Alexandria",
        state: 1,
        postCode: 2016
      }
    ]
  });
  return (
    <MaterialTable
      title="Property Address Management"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
}

export default App;
