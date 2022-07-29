import { Post } from "./Post";
import {Header} from "./components/Header";

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Anderson"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ducimus veritatis quod nulla voluptatem, quaerat reiciendis enim quis aperiam quia impedit nostrum eveniet laboriosam error excepturi at, rem officiis a."
      />

      <Post author="Diego" content="Novo post" />
      <Post />
    </>
  );
}
