import React from "react";

export class ProfilePageHeader extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage:
              "url(" + require("assets/img/bruno-abatti.jpg") + ")",
          }}
          className="page-header page-header-xs"
          data-parallax={true}
        >
          <div className="filter" />
        </div>
      </>
    );
  }
}

export default ProfilePageHeader;
