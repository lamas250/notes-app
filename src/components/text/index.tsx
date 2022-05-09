import React, { ReactElement, ReactNode } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import { fonts } from "@utils";

type TextProps = {
  weight: "400" | "700";
  children?: ReactNode;
} & NativeTextProps;

const defaultProps = {
  weight: "700",
};

export default function Text({
  children,
  style,
  weight,
  ...props
}: TextProps): ReactElement {
  let fontFamily;
  if (weight === "400") {
    fontFamily = fonts.Font_400;
  }
  if (weight === "700") {
    fontFamily = fonts.Font_700;
  }

  return (
    <NativeText {...props} style={[style, { fontFamily }]}>
      {children}
    </NativeText>
  );
}

Text.defaultProps = defaultProps;
