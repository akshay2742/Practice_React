import React from 'react';
import ChildList from './ChildList';

function NameList() {
    const personList = [
        {
            id: 1,
            name: 'Krishna',
            age: '22'
        },
        {
            id: 2,
            name: 'Raj',
            age: '23'
        },
        {
            id: 3,
            name: 'Ravi',
            age: '24'
        }
    ]
    const personList1 = personList.map(person => <ChildList key={person.id} person={person}></ChildList>);
  return (<div>
    {personList1}
  </div>);
}

export default NameList;
