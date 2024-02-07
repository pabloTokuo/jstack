import React, { useState } from "react";

import Post from "../Post";
import Header from "../Header";

import { Title } from "./styles";

import { ThemeProvider } from "../../context/ThemeContext";

function App() {
  const [posts, setPosts] = useState(
    [
      { id: Math.random(), title: "Title#01", subtitle: "Sub#01", likes: 20, read: false, removed: false },
      { id: Math.random(), title: "Title#02", subtitle: "Sub#02", likes: 10, read: true, removed: false },
      { id: Math.random(), title: "Title#03", subtitle: "Sub#03", likes: 50, read: false, removed: false },
      { id: Math.random(), title: "Title#04", subtitle: "Sub#04", likes: 100, read: true, removed: false },
    ]
  );
  
  const handleCreatePostButton = () => {
      setPosts((prevState) => [
        ...prevState,
        { 
          id: Math.random(), 
          title: `Title#0${prevState.length + 1}`, 
          subtitle: `Sub#0${prevState.length + 1}`, 
          likes: 100
        }
      ])
  };

  const handleRemoveButton = (postId) => {
    setPosts((prevState) => prevState.map(post => (
      post.id === postId ? { ...post, removed: true} : post
    )))
  };

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">Posts da semana</Title>
        <button onClick={handleCreatePostButton}>Criar post</button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id} 
          likes={post.likes}
          onRemove={handleRemoveButton}
          post={post}
        />
      ))}

    </ThemeProvider>
  )
}

export default App;