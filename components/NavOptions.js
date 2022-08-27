import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  FlatList,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'


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
    image: 'https://cdn3.iconfinder.com/data/icons/takeaway-food/500/nim1413_24_noodle_box_chinese_food-512.png',
    screen: 'EatScreen'
  }
]

const NavOptions = () => {
  const navigation = useNavigation()
  const origin = useSelector(selectOrigin)
  const imageWidth = Dimensions.get('screen').width / 3.4587780905623395

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`pl-6 pr-4 pb-8 pt-4 bg-gray-200 m-2`}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={tw`${!origin ? 'opacity-20' : 'opacity-100'}`}>
            <Image
              style={{ width: imageWidth, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright'
              color='white'
              type='antdesign'
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
