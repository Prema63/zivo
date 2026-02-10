import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const BannerCrousel = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='px-4 pt-4'>
            <View className='mr-3'>
                <Image
                    source={{
                        uri: 'https://images.squarespace-cdn.com/content/v1/5453ab5de4b03c8f81fbc066/1673520630464-M33H45GFL6IU2273LXQZ/square-food-bbc-awards-web-94.jpg?format=1000w'
                    }}
                    className='w-80 h-44 rounded-xl'
                    resizeMode='cover'
                />
            </View>
            <View className='mr-3'>
                <Image
                    source={{
                        uri: 'https://b.zmtcdn.com/data/pictures/chains/9/18553729/ed4147c8175268b514cd941c83021572.jpeg'
                    }}
                    className='w-80 h-44 rounded-xl'
                    resizeMode='cover'
                />
            </View>
            <View className='mr-3'>
                <Image
                    source={{
                        uri: 'https://threesquaremeals.in/img/about4.jpg'
                    }}
                    className='w-80 h-44 rounded-xl'
                    resizeMode='cover'
                />
            </View>
            <View className='mr-3'>
                <Image
                    source={{
                        uri: 'https://ca-times.brightspotcdn.com/dims4/default/3163b27/2147483647/strip/true/crop/5919x3945+0+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa3%2Fe3%2F605ea47843ad8f51d378e925b0bb%2F1389428-fo-na-cocktails-kato13-mam.jpg'
                    }}
                    className='w-80 h-44 rounded-xl mr-5'
                    resizeMode='cover'
                />
            </View>

        </ScrollView>
    )
}

export default BannerCrousel

const styles = StyleSheet.create({})