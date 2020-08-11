import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "CAMERA",
          imageUrl:
            "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80",
          id: 1,
          linkUrl: "cameras",
        },
        {
          title: "DRONES",
          imageUrl:
            "https://images.unsplash.com/photo-1576716061945-78125492df88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
          id: 2,
          linkUrl: "drones",
        },
        {
          title: "LENSES",
          imageUrl:
            "https://images.unsplash.com/photo-1542376132-7c05ad0d95e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          id: 3,
          linkUrl: "lenses",
        },
        {
          title: "GOPROS",
          imageUrl:
            "https://c0.wallpaperflare.com/preview/511/941/208/panama-cambutal-hero-5-black-gopro-black.jpg",
          size: "large",
          id: 4,
          linkUrl: "gopros",
        },
        {
          title: "CAMCORDERS",
          imageUrl:
            "https://images.unsplash.com/photo-1581324999567-539f4364fc54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1532&q=80",
          size: "large",
          id: 5,
          linkUrl: "camcorders",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
