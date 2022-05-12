import './App.css';
import List from './List';
import Search from './Search';
import React from 'react';

function App() {

  // let stories = [
  //   {
  //     obj_id : 1,
  //     title : "One",
  //     story : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod ut sint minus blanditiis recusandae minima similique laudantium perferendis voluptatem sed ullam quos dicta, at repellendus officia doloremque voluptatum beatae.'
  //   },
  //   {
  //     obj_id : 2,
  //     title : "Two",
  //     story : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod ut sint minus blanditiis recusandae minima similique laudantium perferendis voluptatem sed ullam quos dicta, at repellendus officia doloremque voluptatum beatae.'
  //   },
  //   {
  //     obj_id : 3,
  //     title : "Three",
  //     story : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod ut sint minus blanditiis recusandae minima similique laudantium perferendis voluptatem sed ullam quos dicta, at repellendus officia doloremque voluptatum beatae.'
  //   }
  // ]


  // // custom hooks
  // const useSemiPersistentState = (key, initialState) => {
  //   const [value, setValue] = React.useState(
  //     localStorage.getItem(key) || initialState
  //   )
  
  //   React.useEffect(
  //     () => {
  //       localStorage.setItem(key,value);
  //     }
  //   ,[value])

  //   return [value, setValue];
  // }

  // // custom hook 
  // const [searchTerm,setSearchTerm] = useSemiPersistentState('search','React');


  // // callback handler
  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // }
  
  
  // // filtered result from search queries
  // const searchedStories = stories.filter(
  //   story => {return story.title.toLowerCase().includes(searchTerm.toLowerCase())}
  //   );

  const [formData, setFormData] = React.useState({
    firstName : '',
    lastName : ''
  })
  
  const handleChange = (event) => {
    setFormData((previousData) => 
      ({ 
        ...previousData,
        [event.target.name] : event.target.value

      })
    )
    console.log(event.target.name)
  }

  return (
    <div className="App">
      {/* <Search onSearch={handleSearch} search={searchTerm}/>
      <List stories={searchedStories}/> */}
      <input type="text" id='firstName' onChange={handleChange} name="firstName" placeholder='First Name'/>
      <input type="text" id='lastName' onChange={handleChange} name="lastName" placeholder='Last Name'/>
    </div>
  );
}

export default App;
