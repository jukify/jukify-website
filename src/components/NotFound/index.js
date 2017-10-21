import React from 'react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div class="container">
      <div class="boo-wrapper">
        <div class="boo">
          <div class="face"></div>
        </div>
        <div class="shadow"></div>
    
        <h1>Whoops!</h1>
        <p>
          We couldn't find the page you
          <br />
          were looking for.
        </p>
      </div>
    </div>
  );
}
