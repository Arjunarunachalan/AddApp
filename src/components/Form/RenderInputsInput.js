import { Fragment } from "react";
import Textarea from "./InputComponents/Textarea";
import TextInputs from "./InputComponents/TextInputs";
import Checkbox from "./InputComponents/Checkbox";
import RadioButton from "./InputComponents/RadioButton";
import Date from "./InputComponents/Date";
import Select from "./InputComponents/Select";
export const RenderInputs = ({
  template,
  values,
  errors,
  handleChange,
  touched,
  setFieldValue,
  initialValues,
}) => {
  const TEXT_FIELDS = ["text", "password", "email", "number"];
  let inputProps = {
    handleChange,
    touched,
    errors,
    values,
    templateInput: {},
    setFieldValue,
    initialValues,
  };
  return (
    <>
      {template.map((templateInput, index) => {
        if (templateInput?.render) {
          return (
            <Fragment key={index}>
              {typeof templateInput.render === "function"
                ? templateInput.render({ ...inputProps })
                : templateInput.render.component({ ...inputProps })}
            </Fragment>
          );
        } else {
          const { input } = templateInput;
          inputProps.templateInput = templateInput;
          if (TEXT_FIELDS.includes(`${input?.type}`)) {
            return <TextInputs key={index} {...inputProps} />;
          }
          if (input?.type === "textarea") {
            return <Textarea key={index} {...inputProps} />;
          }
          if (input?.type === "checkbox") {
            return <Checkbox key={index} {...inputProps} />;
          }
          if (input?.type === "radio") {
            return <RadioButton key={index} {...inputProps} />;
          }
          if (input?.type === "date") {
            return <Date key={index} {...inputProps} />;
          }
          if (input?.type === "select") {
            return <Select key={index} {...inputProps} />;
          }
          return <div key={index}> No Input Rendered </div>;
        }
      })}
    </>
  );
};
