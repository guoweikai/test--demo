/*
 * @Date: 2020-06-27 10:03:17
 * @LastEditors: GWK
 * @LastEditTime: 2020-06-27 10:03:48
 * @FilePath: /test--demo/like_button.js
 */

"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
