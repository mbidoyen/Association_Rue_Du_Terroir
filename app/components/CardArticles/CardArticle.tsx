import {faComment, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';

type CardsArticleComponentsProps = {
  articleId: number;
  title: string;
  image: Uint8Array | Blob | null;
  description: string;
  likes_number: number;
  comments_number: number;
  post_date: Date;
  user_post: string;
};

const CardArticle: React.FunctionComponent<
  CardsArticleComponentsProps
> = props => {
  let imageSource;
  if (props.image instanceof Blob) {
    imageSource = URL.createObjectURL(props.image);
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.articleTitle}>{props.title}</Text>
      <Pressable onPress={() => Alert.alert('id is ' + props.articleId)}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/must-take-pictures-in-paris-bastille.jpg')}
        />
        <Text numberOfLines={5} style={styles.description}>
          {props.description}
        </Text>
      </Pressable>
      <View style={styles.postContainer}>
        <Text style={styles.authorStyle}>Auteur. {props.user_post}</Text>
        <Text style={styles.dateStyle}>
          {props.post_date.toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.likeAndCommentContainer}>
        <Pressable style={styles.PressableIcon}>
          <FontAwesomeIcon size={30} icon={faThumbsUp} />
          <Text style={styles.countLikesAndComments}>{props.likes_number}</Text>
        </Pressable>
        <Pressable style={styles.PressableIcon}>
          <FontAwesomeIcon size={30} icon={faComment} />
          <Text style={styles.countLikesAndComments}>
            {props.comments_number}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '95%',
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#777777',
  },

  articleTitle: {
    width: '100%',
    fontSize: 20,
    paddingVertical: 5,
    paddingLeft: 10,
    color: 'black',
  },

  image: {
    maxWidth: '100%',
    height: 200,
    objectFit: 'fill',
  },

  description: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'black',
  },

  postContainer: {
    width: '95%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  likeAndCommentContainer: {
    paddingVertical: 5,
    paddingLeft: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },

  PressableIcon: {
    width: '17%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },

  countLikesAndComments: {
    color: 'black',
    fontSize: 18,
  },

  authorStyle: {
    fontWeight: '500',
    color: 'gray',
  },

  dateStyle: {
    color: 'gray',
    fontWeight: '500',
  },
});

export default CardArticle;
