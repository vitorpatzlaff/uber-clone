import React from 'react'
import {
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native'
import tw from 'twrnc'

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen'
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://linkds.papareact.com/28w',
    screen: 'EatScreen'
  }
]

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
