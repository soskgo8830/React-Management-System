import React,{Component} from 'react';
import Customer from './components/Customer'

const customers = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'최상민',
    'birthday':'960807',
    'gender':"남성",
    'job':'웹개발자'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/3',
    'name':'홍길동',
    'birthday':'920512',
    'gender':"남성",
    'job':'UX/UI 디자이너'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/5',
    'name':'최승호',
    'birthday':'960914',
    'gender':"남성",
    'job':'소프트웨어 개발자'
  }
]


class App extends Component {
  render() {
    return (
        <div>
          {customers.map(c => {
            return <Customer
             key={c.id} 
             id={c.id} 
             image={c.image} 
             name={c.name} 
             birthday={c.birthday} 
             gender={c.gender} 
             job={c.job} />
          })}
        </div>
      );
    }
  }

export default App;