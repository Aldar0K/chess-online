import { compose } from "ramda";

import withRouter from "./withRouter";

export const withProviders = compose(withRouter);
