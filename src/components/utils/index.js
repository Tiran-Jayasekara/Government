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
      id: "location",
      type: "text",
      placeholder: "Enter Location",
      value:"location",
      label: "Location",
      componentType: "input",
    },
    {
      id: "image",
      type: "text",
      placeholder: "Enter Image URL",
      value:"image",
      label: "Image",
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
      id: "description",
      type: "text",
      placeholder: "Enter Description",
      value:"description",
      label: "Description",
      componentType: "input",
    },
  ];
  

  export const governmentData = [
    {
      img: "/assests/pradeshiyaSabha.jpg",
      name: "ප්‍රාදේශීය සභාව",
      status: true,
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
      path:"/pages/government/pradeshiya_sabha"
    },
    {
      img: "https://island.lk/wp-content/uploads/2021/10/ceb.jpg",
      name: "විදුලි බල මණ්ඩලය ",
      status: false,
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
      path:"/pages/government/ceb"
    },

    {
      img: "/assests/hospital.jpg",
      name: "රෝහල",
      status: true,
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
      path:"/pages/government/hospital"
    },
    {
      img: "/assests/police.jpg",
      name: "පොලීසිය",
      status: false,
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
      path:"/pages/government/police"
    },
  ];