import React, { Component } from "react";
import PostData from "../data/VEaasData.json";

class PostList3 extends Component {
  render() {
    return (
      <div>
        {PostData.map((postDetail, index) => {
          return <div>
              <h6>{postDetail.Anand}</h6>
                </div>
        })}
      </div>
    );
  }
}

export default PostList3;
