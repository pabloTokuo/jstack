import React from "react";

import Post from "./Post";
import Header from "./Header";

function App() {
  return (
    <>
      <Header title="Blog do JStack">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post 
        likes={20}
        post={{
          title: "Título da notícia 01",
          subtitle: "Subtítulo da notícia 01",
        }}
      />
      <Post 
        likes={30}
        post={{
          title: "Título da notícia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />
      <Post 
        likes={40}
        post={{
          title: "Título da notícia 03",
          subtitle: "Subtítulo da notícia 03",
        }}
      />
    </>
  )
}

export default App;