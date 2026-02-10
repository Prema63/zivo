import { StatusBar, StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import BannerCrousel from '../components/BannerCrousel';

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const products = [
    {
      id: '1',
      name: 'Cow milk packet',
      price: 70,
      imageUrl: 'https://www.bbassets.com/media/uploads/p/l/40141614_6-amul-amul-cow.jpg'
    },
    {
      id: '2',
      name: 'Buffalo milk packet',
      price: 80,
      imageUrl: 'https://www.bbassets.com/media/uploads/p/l/40167828_5-amul-buffalo-milk.jpg'
    },
    {
      id: '3',
      name: 'Ghee(500g)',
      price: 550,
      imageUrl: 'https://www.bbassets.com/media/uploads/p/l/40167828_5-amul-buffalo-milk.jpghttps://m.media-amazon.com/images/I/61+MMAWgOLL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: '4',
      name: 'Paneer',
      price: 200,
      imageUrl: 'https://www.bbassets.com/media/uploads/p/l/40096748_3-amul-malai-fresh-paneer.jpg'
    },
  ]

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-green-700">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#15803d"
        translucent={false}
      />

      <View className="bg-green-700">
        <Header />
        <View className="px-4 pb-4">
          <SearchBar value={query} onChange={setQuery} />
        </View>
      </View>

      <ScrollView className='flex-1 bg-white rounded-t-3xl'>
        <View className='pb-10'>
          <View className='pt-4'>
            <BannerCrousel />
          </View>

          {/* categories */}
          {/* <View>

          </View> */}
          <View className='px-4 mt-3'>
            <View className='flex-row items-center mt-3 justify-between'>
              <Text className='text-xl font-bold '>Flash Sale</Text>
              <Text className='text-purple-600'>View all</Text>
            </View>
          </View>

          <View className='px-4 mt-3'>
            <View className='flex-row items-center mt-3 justify-between'>
              <Text className='text-xl font-bold '>Puja Special</Text>
              <Text className='text-purple-600'>View all</Text>
            </View>
          </View>

          <ScrollView>
            {products?.map((p) => (
              <View key={p.id} className="mb-4">
                <View className="h-40 w-full rounded-xl overflow-hidden">
                  <Image
                    source={{ uri: p.imageUrl }}
                    className="h-full w-full"
                    resizeMode="cover"
                  />
                </View>
              </View>
            ))}
          </ScrollView>

        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});