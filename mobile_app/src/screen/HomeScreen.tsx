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
      imageUrl: 'https://imgs.search.brave.com/UoEgqRx4eNGW1SbinIeGyf5s-SiC0ElKalpKMRUDZvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlYXVyaWMuY29t/L2Nkbi9zaG9wL2Zp/bGVzL0doZWUxXzQw/MHguanBnP3Y9MTY4/ODE5NDU4Ng'
    },
    {
      id: '4',
      name: 'Mongo Leaves',
      price: 50,
      imageUrl: 'https://imgs.search.brave.com/MNgEeCGYLVBZzcfRttcKFvEZtYIYBIPH7UpEruMiy6s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFLZFhGSzJKa0wu/anBn'
    },
    {
      id: '5',
      name: 'flower',
      price: 30,
      imageUrl: 'https://imgs.search.brave.com/AnVEIqaDqqsOfVJEaGeYU66zGc2EBoT_U-ov_m9Epqo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZXRm/bG93ZXJzZGFpbHku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzExL09uYW0t/Rmxvd2VyLVBhY2th/Z2UtMy5qcGc'
    },
    {
      id: '6',
      name: 'Dhoop',
      price: 100,
      imageUrl: 'https://imgs.search.brave.com/ef_BdZMvXor8slfuRaMrhdchk1GXUvHfyO7tTah-XXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvZGhvb3AtY29u/ZS9pLzYvYy9waW5r/LWx1eHVyeS1yb3Nl/LWRob29wLWNvbmVz/LTEwMGctZnJlZS1z/dGFuZC1ndWxhYi1p/bmNlbnNlLWZvci1v/cmlnaW5hbC1pbWFo/a2YyNHhkemJ0bjhl/LmpwZWc_cT03MA'
    },
    {
      id: '7',
      name: 'Pooja Thali',
      price: 800,
      imageUrl: 'https://imgs.search.brave.com/LqP_Rg3QEpIpWzSQmjaLr7tGrB5L0y2umKI7I6O0dwU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk2L2Jh/LzI2Lzk2YmEyNmUy/YTA4OTNmMjU0M2Qw/OTMwZWNhNzc5Njgx/LmpwZw'
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
          <View>
              <Text className='ml-3 mt-3'>Show all the categories here</Text>
          </View>
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

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          >
            <View className="flex-row gap-4">
              {products?.map((p) => (
                <View key={p.id} className="w-32">
                  <View className="h-32 rounded-xl overflow-hidden">
                    <Image
                      source={{ uri: p.imageUrl }}
                      className="h-full w-full"
                      resizeMode="cover"
                    />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>

        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});