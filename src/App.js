
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
      title: 'First post'
    },
    {
      id : 2,
      title: 'Second post'
    },
    {
      id : 3,
      title: 'Third post'
    }
  ]);

  return (
   <>
    <Navbar setShowModal={setShowModal}/>
    <PostsList posts={posts}></PostsList>
    {showModal && <Modal danger={true}  setShowModal={setShowModal}>
      <PostForm />
    </Modal>}
 
   </>
  );
}
export default App;
