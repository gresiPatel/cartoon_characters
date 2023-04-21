import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Platform} from 'react-native';

import {useAxios} from '../../hooks';
import {CharacterType, apiResponseType, ScreenProps} from '../../types';

import {CharacterCard, ContentLoader} from './characterCard';
import {styles} from './style';
import {responsiveHeight} from '../../resources';

//dummy array to display content loading view
const loadingArray: any[] = new Array(6).fill(null);

export const Characters = ({navigation}: ScreenProps) => {
  const characterList = useRef<CharacterType[]>([]);

  const [pageURL, setPageURL] = useState<string | null>(`/character`);

  //get first page of characters
  //along with intialization of api's response params (result,error,loading and nextpage function)
  const {apiResponse, loading, apiError, callNextPage} = useAxios(
    pageURL as string,
  );

  //to reset list on refresh page - it's just for the debug mode
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
      // Platform.OS !== 'web' && loadProfilePictuctures(response.results);
      setPageURL(response.info.next);
    }
  };

  // //to preload character's profile to display later (it will reduce time to load images while rendering)
  // //because it will be load images from cache instead of remotely
  // const loadProfilePictuctures = (response: CharacterType[]) => {
  //   FastImage.preload(response.map(item => ({uri: item.image})));
  // };

  //call next page api to get more characters
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
      //data - concat extra array to manage view while fetching new page or first page
      data={
        loading
          ? [...characterList.current, ...loadingArray]
          : characterList.current
      }
      //renderItem - conditionally render item card whether it is in loading mode or in displaying details
      renderItem={({item}) =>
        item == null ? <ContentLoader /> : <CharacterCard {...item} />
      }
      keyExtractor={(item, index) => `char_${index}}`} //unique key for each item
      numColumns={Platform.OS === 'web' ? 6 : 2}
      onEndReached={() => getMoreCharacters()} //on scroll end to list it will be callback for the next page
      onEndReachedThreshold={0.05} //to manage pagination
      //getItemLayout - to improve performance of large list (it makes fast loading items - allocate item's height/width before render)
      getItemLayout={(_, index) => ({
        length: responsiveHeight(35),
        offset: responsiveHeight(35) * index,
        index,
      })}
      bounces={false}
      removeClippedSubviews={true} //to prevent blank space issue after the list on scroll end
      windowSize={characterList.current.length || 1} //to prevent blank view on scroll fast (when scroll to already loaded items)
    />
  );
};
