/* eslint-disable react/display-name */
import React, { forwardRef, useState } from "react";

// eslint-disable-next-line no-unused-vars
import styled from "styled-components";
import DatePicker from "../DatePicker"
import { StyledFormGroup } from "../../../styles/helpers.styles";
import ChooseFile from "../../atoms/ChooseFile";
import { Error, InputHolder } from "./Field.styles";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { TbCheck } from "react-icons/tb";
import Label from "../Label";
import Input from "../Input";
import FakeInput from "../FakeInput";
import FakeLabel from "../FakeLabel";
import InputIcon from "../InputIcon";
const defaultProps = {
  type: "text",
};

const Field = forwardRef(
  (
    {
      rules,
      error,
      name,
      invalid,
      label,
      type,
      prefix,
      suffix,
      rounded,
      noMargin,
      margin,
      button,
      searchField,
      onlyRead,
      labelIcon,
      disabled,
      datePicker,
      clear,
      labelReverse,
      radioBorder,
      labelColor,
      ...props
    },
    ref
  ) => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const inputProps = {
      id: props.id ?? name,
      name,
      type,
      invalid,
      "aria-describedby": `${name}Error`,
      ...props,
    };
    const renderInputFirst = type === "checkbox" || type === "radio";
    return (
      <StyledFormGroup
        $invalid={invalid || error}
        noMargin={noMargin}
        css={`
          margin-bottom: ${margin};
        `}
      >
        {renderInputFirst && label && (
          <Label
            htmlFor={inputProps.id}
            labelIcon={labelIcon}
            onlyRead={onlyRead}
            clear={clear}
            labelReverse={labelReverse}
            css="display: flex !important; align-items:center; margin-bottom:0 !important;"
          >
            <Input
              {...inputProps}
              ref={ref}
              disabled={disabled}
              $invalid={invalid || error}
              checked={inputProps?.value}
              // eslint-disable-next-line no-shadow
              onChange={({ target: { name, checked } }) =>
                inputProps?.onChange?.({ target: { name, value: checked } })
              }
            />
            <FakeInput $radioBorder={radioBorder} $labelReverse={labelReverse}>
              {type === "checkbox" && <TbCheck color="var(--white)" />}
            </FakeInput>
            <FakeLabel
              $labelColor={labelColor}
              required={rules?.filter(({ required }) => required).length}
            >
              {label}
            </FakeLabel>
          </Label>
        )}

        {renderInputFirst || (
          <>
            {label && (
              <Label
                onClear={() =>
                  inputProps?.onChange?.({
                    target: {
                      name,
                      value: type === "datepicker" ? [null, null] : "",
                    },
                  })
                }
                clear={clear}
                labelIcon={labelIcon}
                htmlFor={inputProps.id}
                required={rules?.filter(({ required }) => required).length}
              >
                {label}
              </Label>
            )}
            <InputHolder $searchField={searchField}>
              {/* input left icon */}
              {prefix && (
                <InputIcon
                  disabled={disabled}
                  // as={type === 'search' && 'button'}
                  // type={type === 'search' ? 'button' : undefined}
                  prefix={prefix}
                  invalid={invalid || error}
                  css={
                    type === "search" &&
                    "color: var(--primary); font-size: 25px; left: 11px;"
                  }
                >
                  {prefix}
                </InputIcon>
              )}
              {suffix && (
                <InputIcon
                  suffix={suffix}
                  disabled={disabled}
                  invalid={invalid || error}
                >
                  {suffix}
                </InputIcon>
              )}
              {/* {datePicker && <DatePicker inputProps={inputProps} />} */}
              {/* password field */}
              {type === "password" ? (
                <>
                  <Input
                    ref={ref}
                    {...inputProps}
                    $prefix={prefix}
                    $suffix={suffix}
                    $invalid={invalid || error}
                    type={isRevealPwd ? "text" : "password"}
                    $rounded={rounded}
                    disabled={disabled}
                    $button={button && true}
                    // autoComplete="off"
                    autoComplete="new-password"
                  />
                  <InputIcon
                    disabled={disabled}
                    suffix
                    css="cursor: pointer"
                    onClick={() => setIsRevealPwd((prevState) => !prevState)}
                  >
                    {isRevealPwd ? <FaEyeSlash /> : <FaEye />}
                  </InputIcon>
                </>
              ) : type === "datepicker" ? (
                <DatePicker
                  {...inputProps}
                  prefix={prefix}
                  $invalid={invalid || error}
                />
              ) : type === "chooseFile" ? (
                <ChooseFile {...inputProps} />
              ) : (
                <>
                  {/* any other input type */}
                  <Input
                    ref={ref}
                    {...inputProps}
                    $prefix={prefix}
                    disabled={disabled}
                    $suffix={suffix}
                    $invalid={invalid || error}
                    $rounded={rounded}
                    $button={button && true}
                  />
                  {/* input right icon */}
                  {suffix && (
                    <InputIcon
                      suffix={suffix}
                      disabled={disabled}
                      invalid={invalid || error}
                    >
                      {suffix}
                    </InputIcon>
                  )}
                  {button && (
                    <div
                      css={`
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 10px;
                      `}
                    >
                      {button}
                    </div>
                  )}
                </>
              )}
            </InputHolder>
          </>
        )}
        {invalid ||
          (error && (
            <Error id={`${name}Error`} role="alert">
              {error}
            </Error>
          ))}
      </StyledFormGroup>
    );
  }
);

Field.defaultProps = defaultProps;

export default Field;
