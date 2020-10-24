import React, { Component } from "react";
import PostData from "../data/VEaasData.json";

class PostList2 extends Component {
  render() {
    return (
      <div>
        {PostData.map((postDetail, index) => {
          return <div>
              <h6>{postDetail.Pranav}</h6>
                </div>
        })}
      </div>
    );
  }
}

export default PostList2;
