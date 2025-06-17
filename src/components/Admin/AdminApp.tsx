"use client"; // remove this line if you choose Pages Router
//import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
//import jsonServerProvider from "ra-data-json-server";

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export const AdminApp = () => {
  return (
    <div>Here you can manage your form</div>
    // <Admin dataProvider={dataProvider}>
    //   <Resource
    //     name="users"
    //     list={ListGuesser}
    //     edit={EditGuesser}
    //     recordRepresentation="name"
    //   />
    // </Admin>
  );
};
