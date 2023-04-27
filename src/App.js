
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostsList from './components/PostsList/index';
import PostForm from './components/PostForm/index';
import Modal from './components/Modal/index'

function App() {
  let [showModal, setShowModal] = useState(false);
  let [posts, setPosts] = useState([
    {
      id : 1,
      title: 'First post',
      status : 'upcoming'
    },
    {
      id : 2,
      title: 'Second post',
      status : 'dropped'
    },
    {
      id : 3,
      title: 'Third post',
      status : 'ongoing'
    }
  ]);

  let addPost = (post)=> {
    setPosts((prevState => [...prevState, post]))
    setShowModal(false)
  }

  return (
   <>
    <Navbar setShowModal={setShowModal}/>
    <PostsList posts={posts}></PostsList>
    {showModal && <Modal danger={true}  setShowModal={setShowModal}>
      <PostForm addPost={addPost} />
    </Modal>}
 
   </>
  );
}
export default App;
