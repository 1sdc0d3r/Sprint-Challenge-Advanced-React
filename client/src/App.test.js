import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as rtl from "@testing-library/react";
import * as jtl from "@testing-library/jest-dom";
import Players from "./components/players";
import Player from "./components/Player";
import "@testing-library/jest-dom/extend-expect";
import { getByTestId } from "@testing-library/react";

afterEach(rtl.cleanup);

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = rtl.render(<App />);
  });
  describe("<Players />", () => {
    it("renders", () => {
      const wrapper = rtl.render(<Players />);
    });
    it("fires button", () => {
      const wrapper = rtl.render(<Players />);
      const button = getByTestId("button");
      expect(button.toHaveTextContent(/button/i));
      rtl.fireEvent.click(button);
    });
    describe("<Player />", () => {
      it("renders", () => async => {
        const wrapper = rtl.render(<Player />);
      });
      it("contains text Carli", () => async => {
        const { getByText } = rtl.render(<Player />);
        expect(getByText(/carli/i)).toHaveTextContent(/carli/i);
      });
      it("contains text Country", () => async => {
        const { getByText } = rtl.render(<Player />);
        expect(getByText(/Country/i)).toHaveTextContent(/Country/i);
      });
      it("contains text Brazil", () => async => {
        const { getByText } = rtl.render(<Player />);
        expect(getByText(/Brazil/i)).toHaveTextContent(/Brazil/i);
      });
      it("contains text Searches: 7", () => async => {
        const { getByText } = rtl.render(<Player />);
        expect(getByText(/Searches: 7/i)).toHaveTextContent(/Searches: 7/i);
      });
    });
  });
});
