import Calculator from "../calculator";
import { fireEvent, render } from "@testing-library/react";

describe("Plans Data Table", () => {
  test("Check whether initial app rendering is happening correctly", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    expect(getByText("Calculator")).toBeInTheDocument();
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(getByTestId("input1").value).toBe("");
    expect(getByTestId("input2").value).toBe("");
    expect(getByTestId("btn-calc-SUM").textContent).toBe("+");
    expect(getByTestId("btn-calc-DED").textContent).toBe("-");
    expect(getByTestId("btn-calc-MUL").textContent).toBe("*");
    expect(getByTestId("btn-calc-DIV").textContent).toBe("/");
    expect(getByTestId("btn-reset").textContent).toBe("Reset");
  });
  test("check all operations work correctly", () => {
    const { getByTestId, queryByTestId } = render(<Calculator />);
    fireEvent.change(getByTestId("input1"), { target: { value: "20" } });
    fireEvent.change(getByTestId("input2"), { target: { value: "10" } });
    fireEvent.click(getByTestId("btn-calc-SUM"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 1"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(getByTestId("output-val").textContent).toBe("Result: 30");

    fireEvent.click(getByTestId("btn-calc-DED"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 2"
    );
    expect(getByTestId("active-operator").textContent).toBe("-");
    expect(getByTestId("output-val").textContent).toBe("Result: 10");

    fireEvent.click(getByTestId("btn-reset"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 2"
    );

    fireEvent.change(getByTestId("input1"), { target: { value: "20" } });
    fireEvent.change(getByTestId("input2"), { target: { value: "10" } });
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("btn-calc-MUL"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 3"
    );
    expect(getByTestId("active-operator").textContent).toBe("*");
    expect(getByTestId("output-val").textContent).toBe("Result: 200");

    fireEvent.click(getByTestId("btn-calc-DIV"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 4"
    );
    expect(getByTestId("active-operator").textContent).toBe("/");
    expect(getByTestId("output-val").textContent).toBe("Result: 2");

    fireEvent.click(getByTestId("btn-reset"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 4"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();
  });
  test("it should not have any change for any operation, either one input is empty", () => {
    const { getByTestId, queryByTestId } = render(<Calculator />);

    fireEvent.click(getByTestId("btn-calc-SUM"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("btn-calc-DED"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("btn-calc-MUL"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("btn-calc-DIV"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.change(getByTestId("input1"), { target: { value: "20" } });
    fireEvent.click(getByTestId("btn-calc-SUM"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("btn-calc-DED"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("btn-calc-MUL"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("btn-calc-DIV"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.change(getByTestId("input1"), { target: { value: "" } });
    fireEvent.change(getByTestId("input2"), { target: { value: "20" } });
    fireEvent.click(getByTestId("btn-calc-SUM"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("btn-calc-DED"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("btn-calc-MUL"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("btn-calc-DIV"));
    expect(getByTestId("operation-count").textContent).toBe(
      "Total operation performed: 0"
    );
    expect(getByTestId("active-operator").textContent).toBe("+");
    expect(queryByTestId("output-val")).not.toBeInTheDocument();
  });
});
