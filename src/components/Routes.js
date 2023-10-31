import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactUs from "./ContactUs";

function Routes() {
  return (
    <Switch>
      <Route path="/contact-us" element={<ContactUs />} />
    </Switch>
  );
}

export default Routes;
