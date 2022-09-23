import ListApp from './ListApp'
import './App.css';
import List from './ListApp';
import { useEffect, useState } from 'react';


// to get data from the localStorage 
// const getLocalItems =() =>{
//   let list = localStorage.getItem('lists');
//   console.log("List", list);
//   if (list) {
//     return JSON.parse(localStorage.getItem('lists'))
//   }
//   else
//   {
//     return [];
//   }
// }


function App() {
  const [input, setInput] = useState(" ");
  // console.log("Input", input);

  const [data, setData] = useState([]);
  // const[data, setData] = useState(getLocalItems());

  // const[toggleSubmit, setToggleSubmit] = useState(true); 

  

  const inputHandler = (e) => {
    e.preventDefault();
    // console.log("ok");
    if (!input) {
      alert("Input is Empty Kindly Enter Your Task");
      return;
    }
    var id = Math.round(Math.random() * 1000);
    console.log("ID" , id);
    let todoObj = {
      id: id,
      text: input,
      status: "Todo"
    }
    setData([...data, todoObj]);
    console.log("Data", data);
    setInput(" ");
  };

  // edit items 

  const editItem = () => {
    console.log(data[0].id);
    let newEdit = data.map((elem)=>{
      return elem.id === todoObj.id;
    })
    alert("OK");
    console.log("edit",newEdit);


  }


  // delete items 
  // const deleteItem = (index) => {
  //   console.log("Delete ID", id);
  //   const updatedItem = input.filter((elem) => {
  //     return index !== elem.id;
  //   })
  //   setData(updatedItem);
  // }

  const onArrowClick = (id, status) => {
    let updateArr = data.map((x) =>
      x.id === id ? { ...x, status: status } : x
    );
    setData(updateArr);
  };




  // add data to local Storage
  // useEffect(()=>{
  //   localStorage.setData('lists', JSON.stringify(data))
  // },[data]);

  return (<>

    <h1>My ToDo App</h1>
    <div>
      <form onSubmit={inputHandler} className='inputForm'>

        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />

        <button>Add Todo</button>


      </form>

      <div className='TodoDiv'>

        <List status="Backlog" data={data} onArrowClick={onArrowClick} right={"Todo"} left={"Backlog"} leftDisabled />
        <List status="Todo" data={data} editItem={editItem} onArrowClick={onArrowClick} right={"Ongoing"} left={"Backlog"} />
        <List status="Ongoing" data={data} onArrowClick={onArrowClick} right={"Done"} left={"Todo"} />
        <List status="Done" data={data} onArrowClick={onArrowClick} right={"Done"} left={"Ongoing"} rightDisabled />

      </div>

    </div>

  </>);
}

export default App;
