import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header.tsx';
import {ScrollView, StyleSheet} from 'react-native';
import NavBar from '../../components/NavBar/NavBar.tsx';
import CardArticle from '../../components/CardArticles/CardArticle.tsx';

const cardData = [
  {
    articleId: 1,
    title: 'Lorem ipsum dolor sit amet',
    image: null, // Placeholder for image data (Uint8Array or Blob)
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes_number: 25,
    comments_number: 10,
    post_date: new Date(2024, 1, 1, 15, 0), // February 6, 2024, 3:00 PM
    user_post: 'user123',
  },
  {
    articleId: 2,
    title: 'Lorem ipsum dolor sit amet',
    image: null, // Placeholder for image data (Uint8Array or Blob)
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes_number: 25,
    comments_number: 10,
    post_date: new Date(2024, 1, 1, 15, 0), // February 6, 2024, 3:00 PM
    user_post: 'user123',
  },
  {
    articleId: 3,
    title: 'Lorem ipsum dolor sit amet',
    image: null, // Placeholder for image data (Uint8Array or Blob)
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes_number: 25,
    comments_number: 10,
    post_date: new Date(2024, 1, 1, 15, 0), // February 6, 2024, 3:00 PM
    user_post: 'user123',
  },
  {
    articleId: 4,
    title: 'Lorem ipsum dolor sit amet',
    image: null, // Placeholder for image data (Uint8Array or Blob)
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes_number: 25,
    comments_number: 10,
    post_date: new Date(2024, 1, 1, 15, 0), // February 6, 2024, 3:00 PM
    user_post: 'user123',
  },
];

const Actualites = () => {
  console.log('Mon Application Actualité');
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Actualités" />
      <ScrollView contentContainerStyle={style.container}>
        {cardData.map(card => (
          <CardArticle
            key={card.articleId}
            articleId={card.articleId}
            title={card.title}
            image={card.image}
            description={card.description}
            likes_number={card.likes_number}
            comments_number={card.comments_number}
            post_date={card.post_date}
            user_post={card.user_post}
          />
        ))}
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
});

export default Actualites;
