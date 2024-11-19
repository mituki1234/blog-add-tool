import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ref, set } from 'firebase/database';
import { db } from './firebase.ts';
import './App.css'

function App() {

  const saveData = async () => {
    let title = document.querySelector('.input-title').value;
    let background = document.querySelector('.input-background').value;
    let link = document.querySelector('.input-link').value;
    try {
      // 'users/userId123/profile' というパスに特定のデータを保存
      await set(ref(db, 'blog/' + Date.now()), {
        title: title,
        background: background,
        link: link,
        view: 0,
        like: 0,
        time: Date.now()
      });
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="logo-container">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div className="blog-form">
          <div className="input-group">
            <label htmlFor="blog-title">Blog Title</label>
            <input 
              type='text' 
              id="blog-title"
              className='input-title'
              placeholder="Enter blog title"
            />
          </div>

          <div className="input-group">
            <label htmlFor="blog-background">Blog Background</label>
            <input 
              type='text'
              id="blog-background" 
              className='input-background'
              placeholder="Enter background details"
            />
          </div>

          <div className="input-group">
            <label htmlFor="blog-background">link</label>
            <input 
              type='text'
              id="blog-link" 
              className='input-link'
              placeholder="Enter background details"
            />
          </div>
        </div>

        <h1 className="main-title">Vite + React Blog Creator</h1>
        
        <div className="card">
          <button 
            onClick={saveData}
            className="save-button"
          >
            Save Blog to Firebase
          </button>
        </div>

        <p className="helper-text">
          Click on the Vite and React logos to learn more about the technologies
        </p>
      </div>
    </>
  )
}

export default App
