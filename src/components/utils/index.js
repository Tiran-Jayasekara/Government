export const navOptions = [
    {
      id: "home",
      label: "මුල් පිටුව",
      path: "/",
    },
    {
      id: "government",
      label: "රාජ්‍ය ආයතන",
      path: "/pages/government",
    },
    {
      id: "bank",
      label: "බැංකු",
      path: "/pages/bank",
    },
    {
      id: "other",
      label: "වෙනත්",
      path: "/pages/other",
    },
  ];
  
  export const adminNavOptions = [
    {
      id: "adminListing",
      label: "Manage All Products",
      path: "/admin-view/all-products",
    },
    {
      id: "adminNewProduct",
      label: "Add New Product",
      path: "/admin-view/add-product",
    },
  ];
  
  export const registrationFormControls = [
    {
      id: "name",
      type: "text",
      placeholder: "Enter your name",
      label: "Name",
      componentType: "input",
    },
    {
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      componentType: "input",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      componentType: "input",
    },
    {
      id: "role",
      type: "",
      placeholder: "",
      label: "Role",
      componentType: "select",
      options: [
        {
          id: "admin",
          label: "Admin",
        },
        {
          id: "customer",
          label: "customer",
        },
      ],
    },
  ];
  
  export const loginFormControls = [
    {
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      componentType: "input",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      componentType: "input",
    },
  ];
  
  export const adminAddNewsformControls = [
    {
      id: "header",
      type: "text",
      placeholder: "Enter Header",
      value:"header",
      label: "Header",
      componentType: "input",
    },
    {
      id: "date",
      type: "text",
      placeholder: "Enter Date",
      value:"date",
      label: "Date",
      componentType: "input",
    },
    {
      id: "time",
      type: "text",
      placeholder: "Enter Time",
      value:"time",
      label: "Time",
      componentType: "input",
    },
    {
      id: "location",
      type: "text",
      placeholder: "Enter Location",
      value:"location",
      label: "Location",
      componentType: "input",
    },
    {
      id: "description",
      type: "text",
      placeholder: "Enter Description",
      value:"description",
      label: "Description",
      componentType: "input",
    },
  ];
  
  export const AvailableSizes = [
    {
      id: "s",
      label: "S",
    },
    {
      id: "m",
      label: "M",
    },
    {
      id: "l",
      label: "L",
    },
  ];
  
 
  export const firebaseConfig = {
    apiKey: "AIzaSyAtjTJwQOvH53SsdsY6dSnCJ-7NVxj-ZFM",
    authDomain: "peerwave-mobileshop.firebaseapp.com",
    projectId: "peerwave-mobileshop",
    storageBucket: "peerwave-mobileshop.appspot.com",
    messagingSenderId: "546197404094",
    appId: "1:546197404094:web:1c145883477140a2b2a1ef",
    measurementId: "G-D9B14W5Q69"
  };
  
  export const firebaseStroageURL =
    "gs://peerwave-mobileshop.appspot.com";
  
  export const addNewAddressFormControls = [
    {
      id: "fullName",
      type: "input",
      placeholder: "Enter your full name",
      label: "Full Name",
      componentType: "input",
    },
    {
      id: "address",
      type: "input",
      placeholder: "Enter your full address",
      label: "Address",
      componentType: "input",
    },
    {
      id: "city",
      type: "input",
      placeholder: "Enter your city",
      label: "City",
      componentType: "input",
    },
    {
      id: "country",
      type: "input",
      placeholder: "Enter your country",
      label: "Country",
      componentType: "input",
    },
    {
      id: "postalCode",
      type: "input",
      placeholder: "Enter your postal code",
      label: "Postal Code",
      componentType: "input",
    },
  ];
