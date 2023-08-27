// pages/article.js

import React from 'react';
import TopBar from "@/pages/components/Topbar";

export default function Articles() {
  const articleStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  return (

    <div style={articleStyle}>
      <h1>Sample Article Title</h1>
      <p>This is a sample article about interesting scientific facts.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
        ultrices metus. Donec finibus risus vel dolor pharetra ultricies.
        Suspendisse potenti.
      </p>
      {/* Add more content here */}
    </div>
  );
};

