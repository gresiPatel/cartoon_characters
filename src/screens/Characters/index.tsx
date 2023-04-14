import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Platform} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useAxios} from '../../hooks';
import {CharacterType, apiResponseType} from '../../types';

import {CharacterCard} from './characterCard';
import {styles} from './style';

export const Characters = ({navigation}: NativeStackScreenProps<{}>) => {
  const characterList = useRef<CharacterType[]>([]);

  const [pageURL, setPageURL] = useState<string | null>(`/character`);

  const {apiResponse, loading, apiError, callNextPage} = useAxios(
    pageURL as string,
  );

  useEffect(() => {
    characterList.current = [];
  }, []);

  useEffect(() => {
    //manage characters which are came from api response
    handleApiResponse();
  }, [apiResponse]);

  //to handle characters, concat new character array with previous and update next page URL
  const handleApiResponse = () => {
    const response: apiResponseType = apiResponse?.data;
    if (response?.results) {
      characterList.current = [...characterList.current, ...response.results];
      setPageURL(response.info.next);
    }
  };

  const getMoreCharacters = () => {
    if (pageURL != null) {
      callNextPage(pageURL as string);
    }
  };

  return (
    <FlatList
      style={{flex: 1}}
      contentContainerStyle={styles.listContentStyle}
      columnWrapperStyle={{justifyContent: 'flex-start'}}
      data={characterList.current}
      renderItem={({item}) => <CharacterCard {...item} />}
      keyExtractor={(item: CharacterType) => `${item.id}`}
      numColumns={Platform.OS === 'web' ? 6 : 2}
      onEndReached={() => getMoreCharacters()}
      onEndReachedThreshold={0.05}
    />
  );
};
