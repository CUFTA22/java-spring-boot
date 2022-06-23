import React from "react";

import Shell from "./Shell";
import { BriefcaseRegular, PersonRegular } from "@fluentui/react-icons";

const AppLayout = ({ children }) => {
  return (
    <Shell
      links={[
        {
          path: "/departments",
          label: "Departments",
          icon: BriefcaseRegular,
        },
        {
          path: "/users",
          label: "Users",
          icon: PersonRegular,
        },
      ]}
    >
      {children}
    </Shell>
  );
};

export default AppLayout;
