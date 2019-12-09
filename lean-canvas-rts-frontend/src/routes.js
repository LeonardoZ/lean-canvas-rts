import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeanCanvas from "./canvas/LeanCanvas";
import ProjectCanvas from "./canvas/ProjectCanvas";
import CreateCanvas from "./canvas/CreateCanvas";
import CanvasGrid from "./canvas/CanvasGrid";
import Admin from "./template/Admin";

export const Routes = () => (
         <Router>
           <Switch>
             <TemplateRoute
               path="/lean-canvas/:canvasId"
               exact
               component={LeanCanvas}
             />
             <TemplateRoute
               path="/project-canvas/:canvasId"
               exact
               component={ProjectCanvas}
             />
             <TemplateRoute
               path="/canvases"
               exact
               component={CanvasGrid}
             />
             <TemplateRoute
               path="/create/canvas"
               exact
               component={CreateCanvas}
             />
           </Switch>
         </Router>
       );

const TemplateRoute = (props ) => {
  console.log(props.component);
  return (
    <Admin>
      <Route {...props} />
    </Admin>
  );
};
