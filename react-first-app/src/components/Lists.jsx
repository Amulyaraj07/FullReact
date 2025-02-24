import React from 'react'

function Lists() {

    const numbers=[1,2,3,4,5];
    const prodInfo=[
        {
            name: "Apple iPhone 13",
            price: 999.99,
            description: "The Apple iPhone 13 is a smartphone developed by Apple Inc.",
            availability:"In stock"
        },
        {
            name:"One plus",
            price: 799.99,
            description: "The One plus is a smartphone developed by One plus Inc.",
            availability:"Out of stock"
        },
        {
            name: "Samsung Galaxy S22",
            price: 899.99,
            description: "The Samsung Galaxy S22 is a smartphone developed by Samsung Inc.",
            availability:"In stock"
        },
        {
            name: "Google Pixel 6",
            price: 699.99,
            description: "The Google Pixel 6 is a smartphone developed by Google Inc.",
            availability:"Out of stock"
        }
    ];

  return (
    <>
        <div>
      {numbers.map((number)=>(
        <ul key={number}>
            <li>{number}</li>
        </ul>
      ))}
    </div>

    <div>
        <h1>Normally fetching</h1>

        {prodInfo.map((prod)=>(
            <ul key={Math.random()}>
                <li>Name: {prod.name}</li>
                <li>Price: {prod.price}</li>
                <li>Description: {prod.description}</li>
                <li>Availability: {prod.availability}</li>
            </ul>
        ))}

        <h1> Destructuring</h1>
        {prodInfo.map(({name,price,description,availability})=>(
            <ul key={Math.random()}>
                <li>Name: {name}</li>
                <li>Price: {price}</li>
                <li>Description: {description}</li>
                <li>Availability: {availability}</li>
            </ul>
        ))}
    </div>
    </>
    
  )
}

export default Lists
