import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type SearchBarProps = {
  value?: string;
  onChange: (text: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <View className="bg-white rounded-full h-12 flex-row items-center px-4 shadow">
      <FontAwesome5 name="search" size={16} color="#9ca3af" />

      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search"
        placeholderTextColor="#9ca3af"
        className="ml-3 flex-1 text-base"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});