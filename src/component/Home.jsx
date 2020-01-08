// import React from 'react'
import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import getAllItems, {
  getAllItemsFromCategorie,
  getOneItem,
  getAllItemsFromOneUser,
} from '../actions/action';

function Home({ getArticles }) {
  useEffect(() => {
    getArticles();
  });
  return (
    <div>
      <Navbar />
      <Categories />
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return { product: state.product };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getAllItems()),
  trie: (payload) => dispatch(getAllItemsFromCategorie(payload)),
  userarticle: (payload) => dispatch(getAllItemsFromOneUser(payload)),
  article: (payload) => dispatch(getOneItem(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
