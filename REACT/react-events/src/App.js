
import Header from "./Header";
import Eventblock from "./Eventblock";
import data from "./db.json"

function App() {

  const events = JSON.parse(JSON.stringify(data.events));
  let tmp_sports = events[0].sports;
  const sports = tmp_sports[0];
  console.log(sports.Capoeira[0].title) // out: Capoeira-Angola
  console.log(Object.keys(sports)) //out: Capoeira


  return (
    <div>
      <Header title="Event manager"/>
      <Eventblock title =
      { Object.keys(sports).map((sport) => {
        return(
          <>
          <h3>{ sport }</h3>
          </>
        )
      })}/>
     
    </div>
  );
}

export default App;
