import React from "react";
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';
import classNames from 'classnames';

import ReactPlayer from 'react-player';

export default function VEaas() {
    const { posts } = useRouteData();
  
    return (
      <div>
        <h1>It's blog time.</h1>
        <br />
        All Posts:
        
      </div>
      
    );
  };
  
  