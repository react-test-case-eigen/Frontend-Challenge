import { FC } from "react";

export const HorizontalRule: FC = () => {
  return (
    <>
      <hr
        style={{
          background: "gray",
          color: "gray",
          borderColor: "gray",
          height: "2px",
          marginTop: "80px",
        }}
      />
    </>
  );
};

export const HorizontalRuleForPages: FC = () => {
  return (
    <>
      <hr
        style={{
          background: "gray",
          color: "gray",
          borderColor: "gray",
          height: "2px",
        }}
      />
    </>
  );
};
