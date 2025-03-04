//--- Function Component in a Seperate File---

const person = {
  name: 'Sergio Ramos',
  club: {
    'jersey_no': 4,
    'joined': '2007'
  },
  profiles: ['instagram', 'facebook', 'twitter'],
  
  printProfile: () => { // this is an "arrow function" (similar like Lamda function in Java)
    console.log(person.profiles[1]);
    <div>person.profiles[1]</div>;
  },

  printAllProfile: () => {
    person.profiles.map( // usage of "map" function
      (profileVal) => {
        console.log(profileVal);
        <div>profileVal</div>;
      }
    )
  }
}

export default function FourthComponent(){
    return (
      // you can have "empty" div like this
      <> 
        {person.name} wears Jersey {person.club.jersey_no} and joined Real Madrid in {person.club.joined}... he has account {person.profiles[0]} & he has also account in {person.printProfile()}
        <div>{person.printAllProfile()}</div>
      </>
    )
  }