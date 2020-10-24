import React, { Component } from "react";
import PostData from "../data/VEaasData.json";

class PostList4 extends Component {
  render() {
    return (
      <div>
        {PostData.map((postDetail, index) => {
          return <div>
              <h6>{postDetail.Sara}</h6>
                </div>
        })}
      </div>
    );
  }
}

export default PostList4;
