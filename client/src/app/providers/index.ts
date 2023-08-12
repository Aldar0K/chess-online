import { compose } from "ramda";

import withAuth from "./withAuth";
import withRouter from "./withRouter";

export const withProviders = compose(withRouter, withAuth);
