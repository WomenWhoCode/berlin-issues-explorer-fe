import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import React from "react";
import { shallow } from "enzyme";
import IssuesList from "./IssuesList";

describe("IssuesList", () => {
  const props = { issues: [] };
  const issuesList = shallow(<IssuesList {...props} />);
  it("renders properly", () => {
    expect(issuesList).toMatchSnapshot();
  });
});
