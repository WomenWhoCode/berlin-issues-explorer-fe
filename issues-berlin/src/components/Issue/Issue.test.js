import React from "react";
import { shallow } from "enzyme";
import Issue from "./Issue";

describe("Issue", () => {
  const props = {
    title: "",
    labels: [],
    repositoryTitle: "",
    repositoryLabels: [],
    repositoryURL: "",
    issueLanguage: ""
  };
  const issue = shallow(<Issue {...props} />);
  it("renders properly", () => {
    expect(issue).toMatchSnapshot();
  });
});
