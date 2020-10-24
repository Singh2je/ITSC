import React, { Component } from "react";
import PostData from "../data/VEaasData.json";

class PostList extends Component {
  render() {
    return (
      <div>
        {PostData.map((postDetail, index) => {
          return <div>
              <h6>{postDetail.Jaspreet}</h6>
                </div>
        })}
      </div>
    );
  }
}

export default PostList;
