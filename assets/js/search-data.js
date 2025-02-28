// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-our-conference",
    title: "Our Conference",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio-conf/";
    },
  },{id: "dropdown-important-calls",
              title: "Important Calls",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/al-folio-conf/important-calls/";
              },
            },{id: "nav-keynotes",
          title: "Keynotes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-conf/keynotes/";
          },
        },{id: "nav-organization-team",
          title: "Organization Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-conf/organization/";
          },
        },];
