import { Switch, Route } from "react-router";


export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/search">
          <SearchPage />
        </Route>

        <Route path="/search/:id">
          <HotelDetails />
        </Route>
      </Switch>
    </>
  );
};
